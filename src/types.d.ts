interface NotifyParams {
  type: "success" | "error" | "warning" | "info"
  message: string
  duration?: number=3000
}

interface DialogParams {
  title: string
  text: string
  isError?: boolean
}