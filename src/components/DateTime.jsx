import { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 60_000)
    return () => window.clearInterval(intervalId)
  }, [])

  const dateParts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).formatToParts(now)
  const timeParts = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(now)

  const part = (parts, type) => parts.find(({ type: partType }) => partType === type)?.value
  const date = `${part(dateParts, 'weekday')} ${part(dateParts, 'month')} ${part(dateParts, 'day')}`.toLowerCase()
  const time = `${part(timeParts, 'hour')}:${part(timeParts, 'minute')}${part(timeParts, 'dayPeriod')}`

  return (
    <div>{date}  {time}</div>
  )
}

export default DateTime