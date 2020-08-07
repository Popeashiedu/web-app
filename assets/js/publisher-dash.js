const hideBalance = document.querySelector('.balance-icon-hide');
const balanceAmount = document.querySelector('.balance-amount');
const balanceHide = document.querySelector('.balance-hide');
const balanceShow = document.querySelector('.balance-show');
const showBalance = document.querySelector('.balance-icon-open');

const openSidebarBtn = document.querySelector('#open-sidebar');
const closeSidebarBtn = document.querySelector('#close-sidebar');
const sidebar_name = document.querySelector('.side-bar__name');
const aside = document.querySelector('aside');
const body = document.body;
closeSidebarBtn.addEventListener('click', () => {
   body.classList.toggle('collapse-sidebar');
   closeSidebarBtn.classList.remove('d-md-block')
   openSidebarBtn.classList.add('d-md-block')
});
openSidebarBtn.addEventListener('click', () => {
   body.classList.toggle('collapse-sidebar');
   closeSidebarBtn.classList.add('d-md-block');
   openSidebarBtn.classList.remove('d-md-block')
})


hideBalance.addEventListener('click', hide);
showBalance.addEventListener('click', hide);

function hide() {
   balanceAmount.classList.toggle('hide-balance');
   balanceHide.classList.toggle('hide');
   balanceShow.classList.toggle('hide');
   showBalance.classList.toggle('hide');
   hideBalance.classList.toggle('hide');
}