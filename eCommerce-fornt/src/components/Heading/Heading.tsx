import { memo } from "react"

const Heading = memo(({ title}: {title: React.ReactNode}) => {
  return (
    <h1>{title}</h1>
  )
})

export default Heading