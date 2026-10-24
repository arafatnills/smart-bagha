"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RotateCcw } from "lucide-react";
import { bloodGroupOptions, locations } from "./find-blood-data";

export const ALL = "all";

type Props = {
    bloodGroup: string;
    location: string;
    onBloodGroupChange: (v: string) => void;
    onLocationChange: (v: string) => void;
    onReset: () => void;
};

export default function DonorFilters({
    bloodGroup,
    location,
    onBloodGroupChange,
    onLocationChange,
    onReset,
}: Props) {
    return (
        <div className="rounded-2xl border bg-card p-4 shadow-xl shadow-muted/20 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
                <div className="space-y-2">
                    <Label htmlFor="blood-group">Blood group</Label>
                    <Select value={bloodGroup} onValueChange={onBloodGroupChange}>
                        <SelectTrigger id="blood-group" className="h-11 w-full">
                            <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={ALL}>All groups</SelectItem>
                            {bloodGroupOptions.map((g) => (
                                <SelectItem key={g} value={g}>
                                    {g}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select value={location} onValueChange={onLocationChange}>
                        <SelectTrigger id="location" className="h-11 w-full">
                            <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={ALL}>All locations</SelectItem>
                            {locations.map((l) => (
                                <SelectItem key={l} value={l}>
                                    {l}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Button
                    type="button"
                    variant="outline"
                    onClick={onReset}
                    className="h-11 sm:col-span-2 lg:col-span-1"
                >
                    <RotateCcw className="h-4 w-4" /> Reset
                </Button>
            </div>
        </div>
    );
}
