import { HealthCard } from "@/components/HealthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User, Settings, Bell, Shield } from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
      </div>

      {/* Profile Info */}
      <HealthCard variant="primary">
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-health-primary/20 rounded-full">
            <User className="w-8 h-8 text-health-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Welcome!</h3>
            <p className="text-muted-foreground">Manage your health journey</p>
            <Badge className="mt-2 bg-health-success/20 text-health-success">Active User</Badge>
          </div>
        </div>
      </HealthCard>

      {/* Account Settings */}
      <HealthCard>
        <div className="flex items-center space-x-3 mb-4">
          <Settings className="w-5 h-5 text-health-primary" />
          <h3 className="font-semibold">Account Settings</h3>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Your Name" />
          </div>
          <Button className="bg-health-primary">Save Changes</Button>
        </div>
      </HealthCard>

      {/* Notification Settings */}
      <HealthCard>
        <div className="flex items-center space-x-3 mb-4">
          <Bell className="w-5 h-5 text-health-secondary" />
          <h3 className="font-semibold">Notification Preferences</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Medication Reminders</span>
            <Badge variant="secondary">Enabled</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Daily Health Tips</span>
            <Badge variant="secondary">Enabled</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Weekly Reports</span>
            <Badge variant="outline">Disabled</Badge>
          </div>
        </div>
      </HealthCard>

      {/* Backend Integration Notice */}
      <HealthCard className="bg-gradient-to-r from-health-accent/5 to-health-accent/10 border-health-accent/20">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-health-accent mt-1" />
          <div>
            <h3 className="font-semibold text-health-accent mb-2">Enable Full Features</h3>
            <p className="text-sm text-muted-foreground mb-3">
              To save your data, enable authentication, and access personalized features, connect this app to Supabase.
            </p>
            <p className="text-xs text-muted-foreground">
              Currently running in demo mode with local data storage.
            </p>
          </div>
        </div>
      </HealthCard>
    </div>
  );
}