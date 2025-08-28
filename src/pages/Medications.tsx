import { useState } from "react";
import { HealthCard } from "@/components/HealthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Pill, Clock, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Medication {
  id: string;
  name: string;
  time: string;
  frequency: string;
}

export default function Medications() {
  const { toast } = useToast();
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: "1",
      name: "Morning Vitamins",
      time: "08:00",
      frequency: "Daily"
    },
    {
      id: "2", 
      name: "Blood Pressure Medication",
      time: "20:00",
      frequency: "Daily"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newMedication, setNewMedication] = useState({
    name: "",
    time: "",
    frequency: "Daily"
  });

  const handleAddMedication = () => {
    if (!newMedication.name || !newMedication.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const medication: Medication = {
      id: Date.now().toString(),
      ...newMedication
    };

    setMedications([...medications, medication]);
    setNewMedication({ name: "", time: "", frequency: "Daily" });
    setShowAddForm(false);
    
    toast({
      title: "Reminder Added",
      description: `${medication.name} reminder set for ${medication.time}`,
    });
  };

  const handleDeleteMedication = (id: string) => {
    setMedications(medications.filter(med => med.id !== id));
    toast({
      title: "Reminder Removed",
      description: "Medication reminder has been deleted",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Medication Reminders</h1>
          <p className="text-muted-foreground mt-1">Manage your medication schedule</p>
        </div>
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-gradient-to-r from-health-primary to-health-primary/80"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Reminder
        </Button>
      </div>

      {showAddForm && (
        <HealthCard className="border-health-primary/20">
          <h3 className="font-semibold mb-4">Add New Reminder</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="medication-name">Medication Name</Label>
              <Input
                id="medication-name"
                placeholder="e.g., Vitamin D, Aspirin"
                value={newMedication.name}
                onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="medication-time">Time</Label>
              <Input
                id="medication-time"
                type="time"
                value={newMedication.time}
                onChange={(e) => setNewMedication({ ...newMedication, time: e.target.value })}
              />
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleAddMedication} className="bg-health-primary">
                Add Reminder
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </HealthCard>
      )}

      <div className="space-y-4">
        {medications.map((medication) => (
          <HealthCard key={medication.id} variant="primary">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-health-primary/20 rounded-lg">
                  <Pill className="w-6 h-6 text-health-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{medication.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{medication.time}</span>
                    <Badge variant="secondary">{medication.frequency}</Badge>
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleDeleteMedication(medication.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </HealthCard>
        ))}
      </div>

      {medications.length === 0 && !showAddForm && (
        <HealthCard className="text-center py-12">
          <Pill className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">No reminders yet</h3>
          <p className="text-muted-foreground mb-4">
            Add your first medication reminder to get started
          </p>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-health-primary to-health-primary/80"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add First Reminder
          </Button>
        </HealthCard>
      )}
    </div>
  );
}