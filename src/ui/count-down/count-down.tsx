'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

export const CountDown = ({
    initialValue,
    duration,
    countTo,
}: { initialValue: number; duration: number; countTo: number }) => {
    const [count, setCount] = useState(initialValue)

    const [started, setStarted] = useState(false)

    const ref = useRef<HTMLSpanElement>(null)

    const delta = useMemo(() => countTo - initialValue, [countTo, initialValue])

    useEffect(() => {
        if (!started) return
        let startTimestamp: number

        const animate = (timestamp: number): void => {
            if (!startTimestamp) startTimestamp = timestamp
            const elapsed = timestamp - startTimestamp

            if (elapsed < duration) {
                const progress = elapsed / duration
                const nextCount = Math.floor(initialValue + delta * progress)
                setCount(nextCount)
                requestAnimationFrame(animate)
            } else {
                setCount(countTo)
            }
        }

        requestAnimationFrame(animate)
        // eslint-disable-next-line
    }, [started, duration, initialValue, countTo, delta])

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <span ref={ref}>
            {count?.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}
        </span>
    )
}