import React from "react"
import { toast } from "sonner"
import { Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <Button
      onClick={() =>
        toast("¡Sonner funciona correctamente!", {
          description: "Astro + Tailwind CSS + Lucide Icons + Shadcn Sonner",
          icon: <CheckCircle2 className="size-4 text-emerald-500" />,
        })
      }
      className="cursor-pointer gap-2"
    >
      <Sparkles className="size-4" />
      Disparar Toast
    </Button>
  )
}
