import type { Pokemon } from '../../types'

type Props = {
  pokemon: Pokemon
}

function capitalize(s: string) {
  if (!s) return ''
  return s[0].toUpperCase() + s.slice(1)
}

const Card: React.FC<Props> = ({
  pokemon
}) => {
  return (
    <div className="rounded-xl bg-base-neutral-light box-border h-[104px] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid">
      <div className="flex flex-row items-center justify-start p-4 gap-[12px]">
        <img
          className="relative rounded-80xl w-[72px] h-[72px] object-cover"
          alt=""
          src={`/pokemon/${pokemon?.name}.png`}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative tracking-[0.02em] leading-[24px] font-medium">
            {capitalize(pokemon?.name)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card