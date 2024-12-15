export function GenerateButton({
  handleGenerate,
}: {
  handleGenerate: () => void
}) {
  return (
    <button
      className="bg-red-500 active:bg-red-600 p-4 rounded-xl w-full flex items-center justify-center"
      onClick={handleGenerate}
    >
      <span className="px-2 text-2xl">🎁</span>
      generate secret santa
    </button>
  )
}
