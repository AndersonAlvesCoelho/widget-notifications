import {
  CheckIcon,
  RocketIcon, XIcon
} from "lucide-react";

export default function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div className="bg-zinc-200 py-4 px-6 flex items-center justify-between dark:bg-zinc-800">
        <span className="font-bold ">Notifcação</span>

        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">MARCAR TODAS COM VISTAS</button>
      </div>

      <div className="">
        <div className="bg-zinc-300 dark:bg-zinc-950 py-2 px-5 text-sm text-zinc-500 dark:text-zinc-400">Recents</div>

        <div className="divide-y-divide-zinc-500 2 dark:divide-zinc-950">
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <RocketIcon className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">Você recebeu um convite para fazer parte da empres Rocketseat.</p>
              <div className="text-xxs dark:text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>

          </div>
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <RocketIcon className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">Você recebeu um convite para fazer parte da empres Rocketseat.</p>
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
            <div className="flex gap-2 self-center">
              <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"><XIcon className="w-3 h-3 text-zinc-50" /> </button>
              <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-400"><CheckIcon className="w-3 h-3 text-zinc-50" /> </button>
            </div>
          </div>

        </div>
      </div>

      <div className="">
        <div className="bg-zinc-300 dark:bg-zinc-950 py-2 px-5 text-sm text-zinc-500 dark:text-zinc-400">Antiga</div>

        <div className="divide-y-divide-zinc-500 2 dark:divide-zinc-950">
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <RocketIcon className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">Você recebeu um convite para fazer parte da empres Rocketseat.</p>
              <div className="text-xxs dark:text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>

          </div>
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <RocketIcon className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">Você recebeu um convite para fazer parte da empres Rocketseat.</p>
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>
            <div className="flex gap-2 self-center">
              <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"><XIcon className="w-3 h-3 text-zinc-50" /> </button>
              <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-400"><CheckIcon className="w-3 h-3 text-zinc-50" /> </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
