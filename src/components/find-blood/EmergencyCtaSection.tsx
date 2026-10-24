import Reveal from "@/components/shared/nav/Reveal";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { emergencyHotline } from "./find-blood-data";

export default function EmergencyCtaSection() {
    return (
        <section className="container mx-auto px-4 py-8 pb-16 md:px-8 md:py-12 md:pb-20">
            <Reveal>
                <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-red-600 p-6 text-white shadow-xl shadow-red-600/20 md:flex-row md:items-center md:p-8">
                    <div>
                        <h2 className="text-xl font-bold md:text-2xl">Need blood urgently?</h2>
                        <p className="mt-2 text-sm text-red-50">
                            Call the national emergency helpline {emergencyHotline} or become a
                            donor yourself.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Button asChild className="h-11 bg-white px-6 text-red-600 hover:bg-red-50">
                            <a href={`tel:${emergencyHotline}`}>
                                <PhoneCall className="h-4 w-4" /> Call {emergencyHotline}
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-11 border-white bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
                        >
                            <Link href="/auth/register">Become a Donor</Link>
                        </Button>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
