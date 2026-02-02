function cafeApp() {
    return {
        menuList: [],
        async init() {
            try {
                // Kita akan mencoba mengambil index menu yang dibuat otomatis oleh CMS
                const response = await fetch('/data/menu/index.json');
                if (!response.ok) {
                    // Jika file index belum ada, coba ambil folder data
                    console.log("Mencoba memuat data menu...");
                }
                const data = await response.json();
                this.menuList = Array.isArray(data) ? data : [data];
            } catch (error) {
                console.error("Menu tidak muncul karena data belum sinkron.");
                // Jika error, kita buat tombol manual untuk refresh data
            }
        }
    }
}
