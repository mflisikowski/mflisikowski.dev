import { Switch } from "@/components/ui/switch";

interface CookieSettingsSwitchProps {
  onCheckedChange?: (checked: boolean) => void;
  description: string;
  disabled?: boolean;
  checked: boolean;
  title: string;
}

export function CookieSettingsSwitch({
  onCheckedChange,
  description,
  disabled = false,
  checked,
  title,
}: CookieSettingsSwitchProps) {
  return (
    <div className="flex items-center justify-between space-x-4 rounded-lg p-4 transition-colors">
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      </div>

      <Switch
        aria-label={`Toggle ${title.toLowerCase()} cookies`}
        className="shrink-0"
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        checked={checked}
      />
    </div>
  );
}
