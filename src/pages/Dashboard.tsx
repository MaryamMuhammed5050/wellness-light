import { HealthCard } from "@/components/HealthCard";
import { Button } from "@/components/ui/button";
import { getTodaysHealthTip } from "@/data/healthTips";
import { Clock, MessageCircle, Plus, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/health-hero.jpg";

export default function Dashboard() {
  const todaysTip = getTodaysHealthTip();

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-health-primary/10 to-health-secondary/10 p-6">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to Your Health Hub
          </h1>
          <p className="text-muted-foreground">
            Stay on top of your wellness journey with personalized reminders and tips.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <img 
            src={heroImage} 
            alt="Health illustration" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <HealthCard variant="primary">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-health-primary/20 rounded-lg">
              <Clock className="w-5 h-5 text-health-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Reminder</p>
              <p className="font-semibold">Morning Vitamins</p>
              <p className="text-sm text-health-primary">in 2 hours</p>
            </div>
          </div>
        </HealthCard>

        <HealthCard variant="secondary">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-health-secondary/20 rounded-lg">
              <Lightbulb className="w-5 h-5 text-health-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tips Read</p>
              <p className="font-semibold">12 this week</p>
              <p className="text-sm text-health-secondary">Keep it up!</p>
            </div>
          </div>
        </HealthCard>

        <HealthCard>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-health-accent/20 rounded-lg">
              <MessageCircle className="w-5 h-5 text-health-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Chat Sessions</p>
              <p className="font-semibold">5 this month</p>
              <p className="text-sm text-health-accent">Ask anything</p>
            </div>
          </div>
        </HealthCard>
      </div>

      {/* Today's Health Tip */}
      <HealthCard className="bg-gradient-to-r from-health-accent/5 to-health-accent/10 border-health-accent/20">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-health-accent/20 rounded-lg">
            <Lightbulb className="w-6 h-6 text-health-accent" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Today's Health Tip</h3>
            <p className="text-muted-foreground mb-3">{todaysTip.tip}</p>
            <span className="text-sm bg-health-accent/20 text-health-accent px-2 py-1 rounded-md">
              {todaysTip.category}
            </span>
          </div>
        </div>
      </HealthCard>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HealthCard>
          <div className="text-center">
            <h3 className="font-semibold mb-3">Medication Reminders</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Set up reminders for your medications and supplements
            </p>
            <Button className="w-full bg-gradient-to-r from-health-primary to-health-primary/80" asChild>
              <Link to="/medications">
                <Plus className="w-4 h-4 mr-2" />
                Add Reminder
              </Link>
            </Button>
          </div>
        </HealthCard>

        <HealthCard>
          <div className="text-center">
            <h3 className="font-semibold mb-3">Health Assistant</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Chat with our AI for health tips and guidance
            </p>
            <Button variant="outline" className="w-full border-health-secondary hover:bg-health-secondary/10" asChild>
              <Link to="/chat">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Chat
              </Link>
            </Button>
          </div>
        </HealthCard>
      </div>
    </div>
  );
}