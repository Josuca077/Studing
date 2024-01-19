export default function () {
    const status = true

    return (
    <h2 style= {{
        color: status ? "#00ff9f" : "#f64348"
    }}>
        Status: {status ? "ON" : "OFF"}
    </h2>)
}