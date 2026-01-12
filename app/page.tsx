import { ComponentExample } from "@/components/component-example";
import EmployeeCard from "@/components/employee-card";
import AddAmbassadorButton from "@/components/add-ambassador";
import AmbassadorList from "@/components/ambassador-list";
export default function Page() {
return (
<div className="flex flex-col items-center justify-center">
  <h1 className="font-semibold text-xl p-8">StartUp Lab Student Ambassador Point Tracker</h1>
 <div className="items-left">
 <AddAmbassadorButton/>
 </div>
 <AmbassadorList/>
  {/* <EmployeeCard /> */}
  {/* <ComponentExample /> */}
</div>
)
;
}