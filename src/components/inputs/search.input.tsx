import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput(props: InputProps) {
  return (
    <div className="relative m-2 w-full">
      <input
        type="text"
        {...props}
        className="rounded-md bg-application-bg py-2 pl-2 pr-10 font-bold text-black placeholder:uppercase placeholder:text-black/60"
      ></input>
      <div>
        <MagnifyingGlassCircleIcon className="absolute right-4 top-0 size-10" />
      </div>
    </div>
  )
}
