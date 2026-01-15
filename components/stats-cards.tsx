import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, TrendingUp, Award } from "lucide-react"

interface StatsCardsProps {
  totalAmbassadors: number
  totalPoints: number
  avgPoints: number
  topPerformer: { name: string; points: number } | null
}

export function StatsCards({ totalAmbassadors, totalPoints, avgPoints, topPerformer }: StatsCardsProps) {
  const stats = [
    {
      title: "Total Ambassadors",
      value: totalAmbassadors,
      description: "Active members",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      title: "Total Points",
      value: totalPoints.toLocaleString(),
      description: "All-time earned",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      title: "Average Points",
      value: avgPoints.toLocaleString(),
      description: "Per ambassador",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
     {
       title: "Top Performer",
       value: topPerformer?.name || "N/A",
       description: topPerformer ? `${topPerformer.points} points` : "No data yet",
       icon: Award,
      color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="relative overflow-hidden bg-violet-100 border-primary border-1">
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.bgColor} rounded-full -mr-16 -mt-16 opacity-50`}
            />
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium text-muted-foreground text-primary ">{stat.title}</CardTitle>
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 text-primary">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
