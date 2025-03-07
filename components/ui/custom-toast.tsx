"use client"
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react"

interface CustomToastProps {
  type: "success" | "error" | "warning"
  message: string
  onClose: () => void
}

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
}

const colorMap = {
  success: "bg-pink-100 text-pink-600",
  error: "bg-red-100 text-red-600",
  warning: "bg-orange-100 text-orange-600",
}

export function CustomToast({ type, message, onClose }: CustomToastProps) {
  const Icon = iconMap[type]

  return (
    <div
      className={`flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-lg`}
      role="alert"
    >
      <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${colorMap[type]} rounded-lg`}>
        <Icon className="w-5 h-5" />
        <span className="sr-only">{type} icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        onClick={onClose}
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <X className="w-3 h-3" />
      </button>
    </div>
  )
}

