import { create } from "zustand";
import { Activity } from "../types/activity";

interface ActivityState {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

const useActivityStore = create<ActivityState>((set) => ({
  activities: [],
  setActivities: (activities: any) => set({ activities }),
}));

export default useActivityStore;
