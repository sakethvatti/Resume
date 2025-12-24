document.addEventListener('DOMContentLoaded',function(){
  const printBtn = document.getElementById('printBtn');
  const themeBtn = document.getElementById('themeBtn');

  printBtn.addEventListener('click',()=>{
    window.print();
  });

  // persistent simple theme toggle
  const theme = localStorage.getItem('theme');
  if(theme === 'dark') document.body.classList.add('dark');

  themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
});
