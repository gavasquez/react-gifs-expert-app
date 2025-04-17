import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useStore = create(
    persist(
        (set) => ({
            theme: false,
            changeTheme: () => set((state) => ({ theme: !state.theme })),
        }),
        {
            name: 'theme',
            getStorage: () => localStorage,
        }
    )
);

export default useStore