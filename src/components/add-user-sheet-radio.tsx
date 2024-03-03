import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export function RadioGroupForm({
  onSelectUserType,
}: {
  onSelectUserType: (userType: string) => void;
}) {
  const [selectedValue, setSelectedValue] = useState("comfortable");
  const handleChange = (event: string) => {
    console.log(event);
    setSelectedValue(event);
    onSelectUserType(event);
  };

  return (
    <RadioGroup value={selectedValue} onValueChange={handleChange}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="mr" id="r1" />
        <Label htmlFor="r1">MR</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="management" id="r2" />
        <Label htmlFor="r2">Management</Label>
      </div>
    </RadioGroup>
  );
}
