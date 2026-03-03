// app/composables/useBusinessHours.ts
// Horario: Lun-Vie 8am-6pm | Sáb 8am-1pm | Dom Cerrado

export function useBusinessHours() {
  const isOpen = ref(false)
  const statusLabel = ref('')
  const nextEvent = ref('')
  let timer: ReturnType<typeof setInterval>

  const SCHEDULE: Record<number, { open: number; close: number } | null> = {
    0: null,               // Domingo — cerrado
    1: { open: 8, close: 18 },
    2: { open: 8, close: 18 },
    3: { open: 8, close: 18 },
    4: { open: 8, close: 18 },
    5: { open: 8, close: 18 },
    6: { open: 8, close: 13 }, // Sábado cierra 1pm
  }

  const DAY_NAMES = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

  function fmt(h: number) {
    return h === 12 ? '12pm' : h < 12 ? `${h}am` : `${h - 12}pm`
  }

  function check() {
    const now   = new Date()
    const day   = now.getDay()
    const hour  = now.getHours() + now.getMinutes() / 60
    const sched = SCHEDULE[day]

    if (!sched) {
      isOpen.value = false
      statusLabel.value = 'Cerrado hoy'
      nextEvent.value = 'Abrimos el lunes a las 8am'
      return
    }

    if (hour >= sched.open && hour < sched.close) {
      isOpen.value = true
      const remaining = sched.close - hour
      const hrs = Math.floor(remaining)
      const mins = Math.round((remaining - hrs) * 60)
      statusLabel.value = 'Abierto ahora'
      nextEvent.value = `Cierra en ${hrs > 0 ? hrs + 'h ' : ''}${mins}min`
    } else {
      isOpen.value = false
      statusLabel.value = 'Cerrado ahora'
      if (hour < sched.open) {
        nextEvent.value = `Abre hoy a las ${fmt(sched.open)}`
      } else {
        // Find next open day
        let nextDay = (day + 1) % 7
        while (!SCHEDULE[nextDay]) nextDay = (nextDay + 1) % 7
        const ns = SCHEDULE[nextDay]!
        nextEvent.value = `Abre el ${DAY_NAMES[nextDay]} a las ${fmt(ns.open)}`
      }
    }
  }

  onMounted(() => {
    check()
    timer = setInterval(check, 60_000) // refresh every minute
  })

  onUnmounted(() => clearInterval(timer))

  return { isOpen, statusLabel, nextEvent }
}