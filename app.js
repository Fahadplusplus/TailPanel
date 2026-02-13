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
const toastTrigger = document.getElementById('liveToastBtn')
const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastTrigger3 = document.getElementById('liveToastBtn3')
const toastTrigger4 = document.getElementById('liveToastBtn4')
const toastLiveExample = document.getElementById('liveToast')
const toastLiveExample2 = document.getElementById('liveToast2')
const toastLiveExample3 = document.getElementById('liveToast3')
const toastLiveExample4 = document.getElementById('liveToast4')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
if (toastTrigger2) {
  const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
  toastTrigger2.addEventListener('click', () => {
    toastBootstrap2.show()
  })
}
if (toastTrigger3) {
  const toastBootstrap3 = bootstrap.Toast.getOrCreateInstance(toastLiveExample3)
  toastTrigger3.addEventListener('click', () => {
    toastBootstrap3.show()
  })
}
if (toastTrigger4) {
  const toastBootstrap4 = bootstrap.Toast.getOrCreateInstance(toastLiveExample4)
  toastTrigger4.addEventListener('click', () => {
    toastBootstrap4.show()
  })
}
 
      

    // Function to set active nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname;
  
  // Select from both sidebars
  const navLinks = document.querySelectorAll('#sidebar .nav-link:not(.dropdown-toggle), .sidebar .nav-link:not(.dropdown-toggle)');
  const dropdownItems = document.querySelectorAll('#sidebar .dropdown-item, .sidebar .dropdown-item');
  
  // Reset all nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Reset all dropdown items
  dropdownItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // Check regular nav links
  navLinks.forEach(link => {
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
  
  // Check dropdown items
  dropdownItems.forEach(item => {
    const itemHref = item.getAttribute('href');
    const itemPath = itemHref.replace(/^\//, '');
    const currentPath = currentPage.replace(/^\//, '').split('/').pop();
    
    if (itemPath === currentPath || currentPage === itemHref) {
      item.classList.add('active');
      
      // Also highlight the parent dropdown toggle
      const dropdownParent = item.closest('.dropdown');
      if (dropdownParent) {
        const dropdownToggle = dropdownParent.querySelector('.dropdown-toggle');
        if (dropdownToggle) {
          dropdownToggle.classList.add('active');
        }
      }
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


