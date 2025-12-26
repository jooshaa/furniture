import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        fill="none"
        {...props}
    >
        <rect width={80} height={80} fill="#454545" rx={10} />
    </svg>
)
export default SvgComponent