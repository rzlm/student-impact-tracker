    "use client"
    import { ComponentExample } from "@/components/component-example";
    import EmployeeCard from "@/components/employee-card";
    import AddAmbassadorButton from "@/components/add-ambassador";
    import AmbassadorList from "@/components/ambassador-list";
    import { getAllAmbassadors } from "@/actions";
    import { useState, useEffect } from "react";
    import { Ambassador } from "@/lib/types";

    export default function Page() {
        const [ambassadorList, setAmbassadorList] = useState<Ambassador[]>([]);

        useEffect(() => {
            async function fetchAmbassadors() {
                const res = await getAllAmbassadors();
                if (res) {
                    setAmbassadorList(res);
                    console.log("d", res)
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

    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-xl p-8">
        StartUp Lab Student Ambassador Point Tracker
      </h1>
      <div className="items-left">
        <AddAmbassadorButton onAmbassadorAdded={handleNewAmbassador} />
      </div>
      <AmbassadorList ambassadors={ambassadorList} onDelete={handleDeleteAmbassador} />
    </div>
    )
    ;
    

    }