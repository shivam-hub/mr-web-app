import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const MedicalDetailsCard = ({ id }) => {
  const [visible, setVisible] = useState(true);

  const handleDelete = () => {
    setVisible(false); // Set the visibility to false to hide the card
  };
  
  return (

    visible && (
      <Card className="my-3">
      <CardHeader>
        <CardTitle> <div>Medical {id}   {id >1 && <button className="bg-gray-300 rounded-full h-4 w-4 ml-2 text-xs text-white" onClick={handleDelete}>x</button>}
</div> 
        
         </CardTitle>
       
      </CardHeader>
      <CardContent>
        <Input id="medical" className="w-80 mt-0 " placeholder="Medical name" />
        <Input id="location" className="w-80 mt-5 " placeholder="Location" />
        <Input id="gst" className="w-80 mt-5 " placeholder="GST number" />
      </CardContent>
    </Card>
    )
 
  );
};

export default MedicalDetailsCard;
