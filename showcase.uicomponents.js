  const overview = document.querySelector('.overview');
  const setting = document.querySelector('.setting');
  const analytics = document.querySelector('.analytics');
const overviewT = document.querySelector('.overviewT');
  const settingT = document.querySelector('.settingT');
  const analyticsT = document.querySelector('.analyticsT');
  const openModal = document.querySelector('.openModal')

  settingT.style.display = 'none'
  analyticsT.style.display = 'none'

  
  overview.addEventListener("click",()=>{
   overviewT.style.display = 'block'
  settingT.style.display = 'none'
  analyticsT.style.display = 'none'
  
})
setting.addEventListener("click",()=>{
  overviewT.style.display = 'none'
  settingT.style.display = 'block'
  analyticsT.style.display = 'none'
  
})
analytics.addEventListener("click",()=>{
   overviewT.style.display = 'none'
  settingT.style.display = 'none'
  analyticsT.style.display = 'block'
  
})

 document.getElementById('openModalBtn').addEventListener('click', function() {
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
});
 document.getElementById('openDrawerBtn').addEventListener('click', function() {
    const drawer = new bootstrap.Offcanvas(document.getElementById('drawerLeft'));
    drawer.show();
});





