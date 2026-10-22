import {
    Bike,
    BriefcaseBusiness,
    Droplet,
    GraduationCap,
    House,
    Recycle,
    Stethoscope,
    Trophy,
    Wrench,
} from "lucide-react";

export const serviceIcons = {
    ride: Bike,
    blood: Droplet,
    repair: Wrench,
    housing: House,
    recycle: Recycle,
    job: BriefcaseBusiness,
    tuition: GraduationCap,
    sports: Trophy,
    doctor: Stethoscope,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;