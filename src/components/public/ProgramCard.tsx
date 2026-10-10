import type { Program } from '../../types/content'
import { Card } from '../common/Card'

export function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon

  return (
    <Card className="flex h-full flex-col">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[#e4f2fb] text-[#0b355c]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-extrabold text-[#0b355c]">{program.title}</h3>
      <p className="mt-1 text-sm font-bold text-[#9a7415]">{program.ageRange}</p>
      <p className="mt-4 flex-1 leading-8 text-[#526a7d]">{program.description}</p>
      <ul className="mt-5 grid gap-2">
        {program.features.map((feature) => (
          <li key={feature} className="rounded-md bg-[#f1f8fd] px-3 py-2 text-sm font-semibold text-[#24445d]">
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}
