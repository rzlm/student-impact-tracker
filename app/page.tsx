    "use client"
    import { ComponentExample } from "@/components/component-example";
    import EmployeeCard from "@/components/employee-card";
    import AddAmbassadorButton from "@/components/add-ambassador";
    import AmbassadorList from "@/components/ambassador-list";
    import { getAllAmbassadors, getTotalAmbassadorPoints } from "@/actions";
    import { useState, useEffect } from "react";
    import { Ambassador } from "@/lib/types";
    import { StatsCards } from "@/components/stats-cards";
import { Card, CardTitle } from "@/components/ui/card";

    export default function Page() {
        const [ambassadorList, setAmbassadorList] = useState<Ambassador[]>([]);
        const [numAmbassadors, setNumAmbassadors] = useState(0)
        const [totalPoints, setTotalPoints] = useState(0)
        const [avgPoints, setAvgPoints] = useState(0)

        useEffect(() => {
            async function fetchAmbassadors() {
                const res = await getAllAmbassadors();
                const pts = await getTotalAmbassadorPoints()
                if (res) {
                    setAmbassadorList(res);
                    setNumAmbassadors(res.length)
                    setTotalPoints(pts)
                    
                    
                    console.log(ambassadorList.length)
                    console.log("d", res)
                    if (numAmbassadors > 0) {
                        setAvgPoints(totalPoints/numAmbassadors)
                    } else {
                        setAvgPoints(0)
                    }
                }
            }
            
            fetchAmbassadors();
            
            console.log(ambassadorList)
        }, []); 
        const handleNewAmbassador = (newAmbassador: Ambassador) => {
            setAmbassadorList(prev => [...prev, newAmbassador]);
        }
   
        const handleDeleteAmbassador = (id: number) => {
            setAmbassadorList(prev => prev.filter(ambassador => ambassador.id !== id));
        }
    

    return (

    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
      <h1 className="font-semibold text-xl py-8 md:self-start">
        StartUp Lab Student Ambassador Point Tracker
      </h1>
      <div className="w-full">
        <StatsCards totalAmbassadors={numAmbassadors} totalPoints={totalPoints} avgPoints={avgPoints} />
      </div>
      <div className="md:self-end ">
        <AddAmbassadorButton onAmbassadorAdded={handleNewAmbassador} />
      </div>
      <AmbassadorList ambassadors={ambassadorList} onDelete={handleDeleteAmbassador} />
    </div>
    )
    ;
    

    }