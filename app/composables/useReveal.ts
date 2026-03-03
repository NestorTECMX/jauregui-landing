// app/composables/useReveal.ts
export function useReveal() {
  const els = ref<Element[]>([])

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
      els.value.push(el)
    })
  })
}