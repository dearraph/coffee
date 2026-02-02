function cafeApp() {
    return {
        menuList: [],
        async init() {
            try {
                const response = await fetch('https://api.github.com/repos/dearraph/cafe/contents/data/menu');
                const files = await response.json();
                
                this.menuList = []; 
                
                
                for (const file of files) {
                    if (file.name.endsWith('.json')) {
                        const contentReq = await fetch(file.download_url);
                        const item = await contentReq.json();
                        this.menuList.push(item);
                    }
                }
            } catch (error) {
                console.error("Menu gagal dimuat:", error);
            }
        }
    }
}
