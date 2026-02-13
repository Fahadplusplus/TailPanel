// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';
document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector('.sidebar');
      const sidebar2 = document.getElementById('sidebar')
     //const sidebar2 = document.querySelector('.sidebar2');
    const search = document.querySelector('.search')
    const burger = document.querySelector('.burger')
    const burger2 = document.querySelector('.burger2')
    const cross = document.querySelector('.cross')
     const cross2 = document.querySelector('.cross2')
    const body = document.getElementsByTagName('body')

 
      

    // Function to set active nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('#sidebar .nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    const linkHref = link.getAttribute('href');
    const linkPath = linkHref.replace(/^\//, ''); // Remove leading slash
    const currentPath = currentPage.replace(/^\//, '').split('/').pop(); // Get filename
    
    // Match exact page or default to index
    if (linkPath === currentPath || 
        (currentPath === '' && linkPath === 'index.html') ||
        currentPage === linkHref) {
      link.classList.add('active');
    }
  });
}

// Run on page load
setActiveNavLink();
    

burger2.addEventListener('click', () => {

 sidebar2.classList.add('open2');
 
     if (window.innerWidth >= 992) {
    document.querySelector('.main-content').style.marginLeft = '260px';
    document.querySelector('.nav2').style.marginLeft = '260px';
  }
  
});  
cross2.addEventListener('click', () => {
 
  sidebar2.classList.remove('open2');
    
      if (window.innerWidth >= 992) {
    document.querySelector('.main-content').style.marginLeft = '';
    document.querySelector('.nav2').style.marginLeft = '';
  }
  
});   
    
burger.addEventListener('click', () => {
  sidebar.classList.add('open');
  document.body.classList.add('no-scroll');
  console.log('aljbsofu');
  
});

cross.addEventListener('click', () => {
  sidebar.classList.remove('open');
  document.body.classList.remove('no-scroll');
});

    Highcharts.chart('myChart', {
  title: {
    text: 'Revenue overview'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr']
  },
  series: [{
    name: 'Sales',
    data: [120, 400, 150, 300]
  }]
});
   Highcharts.chart('myChart2', {
  title: {
    text: 'Profit VS Expenses'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr']
  },
  series: [{
    name: 'Sales',
    data: [120, 200, 120, 360]
  }]
});




});
