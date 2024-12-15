export function Error({ message }: { message: string | null }) {
  return (
    <p className="text-red-600 text-sm text-center w-full h-6">
      {message && message}
    </p>
  )
}
