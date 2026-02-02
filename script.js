function cafeApp() {
    return {
        menuList: [],
        async init() {
            try {
                // Ambil daftar file dari GitHub agar website tahu file apa saja yang ada
                const response = await fetch('https://api.github.com/repos/dearraph/coffe/contents/data/menu');
                const files = await response.json();
                
                this.menuList = []; 
                for (const file of files) {
                    if (file.name.endsWith('.json')) {
                        // Ambil isi dari masing-masing file menu
                        const contentReq = await fetch(file.download_url);
                        const item = await contentReq.json();
                        this.menuList.push(item);
                    }
                }
            } catch (error) {
                console.error("Gagal memuat menu, pastikan folder data/menu sudah ada di GitHub.");
            }
        }
    }
}
