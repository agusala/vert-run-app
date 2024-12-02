export interface Activity {
  id: number;
  name: string;
  date: string;
  distance: number;
  time: number;
  elevation: number;
}

export interface MonthlyStats {
  month: string;
  totalDistance: number;
  totalTime: number;
  totalElevation: number;
}

export const getRecentActivities = async (): Promise<Activity[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Morning Run",
          date: "2024-11-30",
          distance: 5,
          time: 1800,
          elevation: 50,
        },
        {
          id: 2,
          name: "Evening Ride",
          date: "2024-11-29",
          distance: 20,
          time: 3600,
          elevation: 200,
        },
      ]);
    }, 1000);
  });
};

export const getMonthlyStats = async (): Promise<MonthlyStats[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          month: "November",
          totalDistance: 100,
          totalTime: 36000,
          totalElevation: 500,
        },
        {
          month: "October",
          totalDistance: 120,
          totalTime: 40000,
          totalElevation: 700,
        },
      ]);
    }, 1000);
  });
};
