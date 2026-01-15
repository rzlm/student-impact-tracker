    "use client"
    import AddAmbassadorButton from "@/components/add-ambassador";
    import AmbassadorList from "@/components/ambassador-list";
    import { getAllAmbassadors } from "@/lib/supabase/actions";
    import { useState, useEffect } from "react";
    import { Ambassador } from "@/lib/types";
    import { StatsCards } from "@/components/stats-cards";

    export default function Page() {
        const [ambassadorList, setAmbassadorList] = useState<Ambassador[]>([]);
        const [numAmbassadors, setNumAmbassadors] = useState(0)
        const [totalPoints, setTotalPoints] = useState(0)
        const [avgPoints, setAvgPoints] = useState(0)
        const [topPerformer, setTopPerformer] = useState<{name: string; points: number} | null>(null) 

        useEffect(() => {
            async function fetchAmbassadors() {
                const res = await getAllAmbassadors();
                if (res) {
                    setAmbassadorList(res);
                }
            }
            
            fetchAmbassadors();
        }, []); 
    
        // Recalculate stats whenever ambassadorList changes
        useEffect(() => {
            setNumAmbassadors(ambassadorList.length);
            
            const total = ambassadorList.reduce((sum, ambassador) => sum + (ambassador.points || 0), 0);
            setTotalPoints(total);
            
            if (ambassadorList.length > 0) {
                setAvgPoints(total / ambassadorList.length);
                const top = ambassadorList.reduce((max, current) => 
                    (current.points || 0) > (max.points || 0) ? current : max
                );
                setTopPerformer({
                    name: `${top.first_name} ${top.last_name}`,
                    points: top.points || 0
                });
            } else {
                setAvgPoints(0);
            }
        }, [ambassadorList]);


        const handlePointsUpdate = (id: number, newPoints: number) => {
            setAmbassadorList(prev => 
                prev.map(ambassador => 
                    ambassador.id === id 
                        ? { ...ambassador, points: newPoints }
                        : ambassador
                )
            );
        }
        const handleNewAmbassador = (newAmbassador: Ambassador) => {
            setAmbassadorList(prev => [...prev, newAmbassador]);
        }
   
        const handleDeleteAmbassador = (id: number) => {
            setAmbassadorList(prev => prev.filter(ambassador => ambassador.id !== id));
        }
    

    return (

    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
      <h1 className="font-semibold text-xl py-8 md:self-start text-primary">
        StartUp Lab Student Ambassador Point Tracker
      </h1>
      <div className="w-full">
        <StatsCards totalAmbassadors={numAmbassadors} totalPoints={totalPoints} avgPoints={avgPoints} topPerformer={topPerformer} />
      </div>
      <div className="md:self-end ">
        <AddAmbassadorButton onAmbassadorAdded={handleNewAmbassador} />
      </div>
      <AmbassadorList ambassadors={ambassadorList} onDelete={handleDeleteAmbassador} onPointsUpdate={handlePointsUpdate}/>
    </div>
    )
    ;
    

    }