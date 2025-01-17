import { unstable_noStore } from 'next/cache'

interface ILanguage {
  hours: number
  minutes: number
  name: string
  percent: number
  text: string
}
interface IWakaResponse {
  languages: ILanguage[]
  totalHours: number
}

const WAKA_STATS_COLORS = [
  {
    barColor: '#2563EB',
    textColor: 'text-wakatime-blue'
  },
  {
    barColor: '#D97706',
    textColor: 'text-wakatime-amber'
  },
  {
    barColor: '#A21CAF',
    textColor: 'text-wakatime-fuchsia'
  },
  {
    barColor: '#4338CA',
    textColor: 'text-wakatime-indigo'
  }
]

const getWakaStats = async (): Promise<IWakaResponse> => {
  // TODO: Check fecth return for errors and
  const response = await fetch(process.env.WAKATIME_API_ENDPOINT!)
  const { data } = (await response.json()) as {
    data?: {
      languages: ILanguage[]
    }
  }
  if (!data) {
    return {
      languages: [],
      totalHours: 0
    }
  }
  let totalHours = 0
  for (const element of data.languages) {
    totalHours += element.minutes
  }
  return {
    languages: data.languages,
    totalHours: totalHours
  }
}

const Bar = ({
  color,
  width,
  x
}: {
  color: string
  width: number | string
  x: number | string
}) => (
  <g fill={color}>
    <rect width={width} height="16" x={x}></rect>
  </g>
)

export async function WakaStats() {
  unstable_noStore()

  const { languages, totalHours } = await getWakaStats()
  if (totalHours < 10 || !languages)
    return <p>Insufficient data for display</p>
  const datum = languages
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 3)

  const stackedBarComments = datum.map(
    ({ name: lang, hours, minutes }, index) => (
      <div key={index}>
        <span
          className={`${WAKA_STATS_COLORS[index]!.textColor} text-xs md:text-sm`}
        >
          {lang}
        </span>
        <span className="  text-xs text-gray-400 md:text-sm">{` • ${hours}h ${minutes}m`}</span>
      </div>
    )
  )

  const HEIGHT = 16
  const WIDTH = 672

  return (
    stackedBarComments && (
      <div className="pb-8">
        <div className="flex flex-row space-x-1">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            height="16"
            width={'100%'}
          >
            <title id="title">A bar chart showing information</title>
            <desc id="desc">
              Dzmitry Svirin top 4 programming languages/
            </desc>
            <Bar
              color={WAKA_STATS_COLORS[0]!.barColor}
              width={(datum[0]!.percent / 100) * WIDTH}
              x={0}
            />
            <Bar
              color={WAKA_STATS_COLORS[1]!.barColor}
              width={(datum[1]!.percent / 100) * WIDTH}
              x={(datum[0]!.percent / 100) * WIDTH}
            />
            <Bar
              color={WAKA_STATS_COLORS[2]!.barColor}
              width={(datum[2]!.percent / 100) * WIDTH}
              x={
                (datum[0]!.percent / 100) * WIDTH +
                (datum[1]!.percent / 100) * WIDTH
              }
            />
          </svg>
        </div>
        <div className="mt-2 flex flex-col md:flex-row md:space-x-2">
          {stackedBarComments}
        </div>
        <p className="  mt-1 text-xs text-gray-400 md:text-sm">
          My last week coding stats taken from a{' '}
          <a
            className="  link-underlined  font-medium text-gray-300 "
            href="https://wakatime.com/@svirins"
          >
            WakaTime
          </a>
        </p>
      </div>
    )
  )
}
