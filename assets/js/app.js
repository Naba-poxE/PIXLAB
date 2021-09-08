class PhotoGallery{
    constructor(){
      this.API_KEY = '563492ad6f91700001000001b3541d437871492eab4ab743ffcd2046';
      this.galleryDIv = document.querySelector('.nabaexpo');
      this.galleryDIvnature = document.querySelector('.nabaexpo_nature');
      this.galleryDIvwork = document.querySelector('.nabaexpo_work');
      this.galleryDIvmusic = document.querySelector('.nabaexpo_music');
      this.searchForm = document.querySelector('.search_data');
      this.loadMore = document.querySelector('.load-more_data');
      this.logo = document.querySelector('.nav__logo')
      this.pageIndex = 1;
      this.searchValueGlobal = '';
      this.eventHandle();
    }
    eventHandle(){
      document.addEventListener('DOMContentLoaded',()=>{
        this.getImg(1);
        this.getImgnature();
        this.getImgwork();
        this.getImgmusic();
      });
      this.searchForm.addEventListener('submit', (e)=>{
        this.pageIndex = 1;
        this.getSearchedImages(e);
      });
      this.loadMore.addEventListener('click', (e)=>{
        this.loadMoreImages(e);
      })
      this.logo.addEventListener('click',()=>{
        this.pageIndex = 1;
        this.galleryDIv.innerHTML = '';
        this.getImg(this.pageIndex);
      })
    }
      async getImg(index){
        this.loadMore.setAttribute('data-img', 'curated');
        const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
        const data = await this.fetchImages(baseURL);
        this.GenerateHTML(data.photos)
      }
      async getImgnature(){
        this.loadMore.setAttribute('data-img', 'curated');
        const baseURL = `https://api.pexels.com/v1/search?query=nature&page=1&per_page=12`;
        const nature_data = await this.fetchImages(baseURL);
        this.GenerateHTMLnature(nature_data.photos)
      }
      async getImgwork(){
        this.loadMore.setAttribute('data-img', 'curated');
        const baseURL = `https://api.pexels.com/v1/search?query=work&page=1&per_page=12`;
        const work_data = await this.fetchImages(baseURL);
        this.GenerateHTMLwork(work_data.photos)
      }
      async getImgmusic(){
        this.loadMore.setAttribute('data-img', 'curated');
        const baseURL = `https://api.pexels.com/v1/search?query=music&page=1&per_page=12`;
        const music_data = await this.fetchImages(baseURL);
        this.GenerateHTMLmusic(music_data.photos)
      }
      async fetchImages(baseURL){
        const response = await fetch(baseURL, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: this.API_KEY
          }
        });
        const data = await response.json();
        // console.log(data);
        return data;
      }
      GenerateHTML(photos){
        photos.forEach(photo=>{
          const item= document.createElement('div');
          item.classList.add('item');
          item.classList.add('col-sm-6');
          item.classList.add('col-md-4');
          item.classList.add('mb-3');
          item.classList.add('work__img');
          item.innerHTML = `
            <a href="${photo.src.original}" class="fancybox" data-fancybox="gallery1" style="text-decoration: none; color:pink;">
              <img src="${photo.src.medium}" style="object-fit: cover; width:100%; height:300px; border-top-left-radius: 0.4em; border-top-right-radius: 0.4em;">
            </a>
              <h3 style="color: #ffffff82;border-bottom-left-radius: 0.4em; text-align: center;padding: 0.5em;border-bottom-right-radius: 0.4em; background-color: ${photo.avg_color}; cursor: pointer;" onclick="forceDownload('${photo.src.original}', 'nabaexpo_${photo.photographer_id}_pixles.jpeg');">
                  <i class="bx  bx-download"></i> Download 
              </h3>
            
          `;
          this.galleryDIv.appendChild(item)
        })
      }
      GenerateHTMLnature(photos){
        photos.forEach(photo=>{
          const item= document.createElement('div');
          item.classList.add('item');
          item.classList.add('col-sm-6');
          item.classList.add('col-md-4');
          item.classList.add('mb-3');
          item.classList.add('work__img');
          item.innerHTML = `
            <a href="${photo.src.original}" class="fancybox" data-fancybox="gallery1" style="text-decoration: none; color:pink;">
              <img src="${photo.src.medium}" style="object-fit: cover; width:100%; height:300px; border-top-left-radius: 0.4em; border-top-right-radius: 0.4em;">
            </a>
              <h3 style="color: #ffffff82;border-bottom-left-radius: 0.4em; text-align: center;padding: 0.5em;border-bottom-right-radius: 0.4em; background-color: ${photo.avg_color}; cursor: pointer;" onclick="forceDownload('${photo.src.original}', 'nabaexpo_${photo.photographer_id}_pixles.jpeg');">
                  <i class="bx  bx-download"></i> Download 
              </h3>
            
          `;
          this.galleryDIvnature.appendChild(item)
        })
      }
      GenerateHTMLwork(photos){
        photos.forEach(photo=>{
          const item= document.createElement('div');
          item.classList.add('item');
          item.classList.add('col-sm-6');
          item.classList.add('col-md-4');
          item.classList.add('mb-3');
          item.classList.add('work__img');
          item.innerHTML = `
            <a href="${photo.src.original}" class="fancybox" data-fancybox="gallery1" style="text-decoration: none; color:pink;">
              <img src="${photo.src.medium}" style="object-fit: cover; width:100%; height:300px; border-top-left-radius: 0.4em; border-top-right-radius: 0.4em;">
            </a>
              <h3 style="color: #ffffff82;border-bottom-left-radius: 0.4em; text-align: center;padding: 0.5em;border-bottom-right-radius: 0.4em; background-color: ${photo.avg_color}; cursor: pointer;" onclick="forceDownload('${photo.src.original}', 'nabaexpo_${photo.photographer_id}_pixles.jpeg');">
                  <i class="bx  bx-download"></i> Download 
              </h3>
            
          `;
          this.galleryDIvwork.appendChild(item)
        })
      }
      GenerateHTMLmusic(photos){
        photos.forEach(photo=>{
          const item= document.createElement('div');
          item.classList.add('item');
          item.classList.add('col-sm-6');
          item.classList.add('col-md-4');
          item.classList.add('mb-3');
          item.classList.add('work__img');
          item.innerHTML = `
            <a href="${photo.src.original}" class="fancybox" data-fancybox="gallery1" style="text-decoration: none; color:pink;">
              <img src="${photo.src.medium}" style="object-fit: cover; width:100%; height:300px; border-top-left-radius: 0.4em; border-top-right-radius: 0.4em;">
            </a>
              <h3 style="color: #ffffff82;border-bottom-left-radius: 0.4em; text-align: center;padding: 0.5em;border-bottom-right-radius: 0.4em; background-color: ${photo.avg_color}; cursor: pointer;" onclick="forceDownload('${photo.src.original}', 'nabaexpo_${photo.photographer_id}_pixles.jpeg');">
                  <i class="bx  bx-download"></i> Download 
              </h3>
            
          `;
          this.galleryDIvmusic.appendChild(item)
        })
      }
      async getSearchedImages(e){
        this.loadMore.setAttribute('data-img', 'search');
        e.preventDefault();
        this.galleryDIv.innerHTML='';
        const searchValue = e.target.querySelector('input').value;
        this.searchValueGlobal = searchValue;
        const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&page=1&per_page=12`
        const data = await this.fetchImages(baseURL);
        this.GenerateHTML(data.photos);
        e.target.reset();
      }
      async getMoreSearchedImages(index){
        // console.log(searchValue)
        const baseURL = `https://api.pexels.com/v1/search?query=${this.searchValueGlobal}&page=${index}&per_page=12`
        const data = await this.fetchImages(baseURL);
        console.log(data)
        this.GenerateHTML(data.photos);
      }
      loadMoreImages(e){
        let index = ++this.pageIndex;
        const loadMoreData = e.target.getAttribute('data-img');
        if(loadMoreData === 'curated'){
          // load next page for curated]
          this.getImg(index)
        }else{
          // load next page for search
          this.getMoreSearchedImages(index);
        }
      }
    }
    
    const gallery = new PhotoGallery;
  
