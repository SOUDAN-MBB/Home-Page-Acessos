document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var menu = document.getElementById('menu');
    var pages = document.querySelectorAll('.page-content');

    // Mostrar página inicial por padrão
    var homepage = document.getElementById('homepage');
    homepage.classList.add('active');

    // Toggle do menu ao clicar no botão
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        var isClickInsideMenu = menu.contains(event.target);
        var isClickInsideToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideToggle) {
            menu.classList.remove('active');
        }
    });

    // Navegação entre páginas de conteúdo ao clicar nos links do menu
    var menuItems = menu.querySelectorAll('a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var pageId = item.getAttribute('data-page');
            // Esconder todas as páginas de conteúdo
            pages.forEach(function(page) {
                page.classList.remove('active');
            });
            // Mostrar a página correspondente ao item clicado
            var currentPage = document.getElementById(pageId);
            currentPage.classList.add('active');
            // Atualizar o título h1 e o texto p para Smaragd e ICM
            if (pageId === 'smaragd-access' || pageId === 'icm-consulta') {
                document.querySelector('h1').textContent = item.textContent;
                document.querySelector('.page-content p').textContent = "Aqui você pode escrever seu texto comum para Smaragd e ICM.";
            } else {
                // Restaurar o título e texto padrão para outros itens de menu
                document.querySelector('h1').textContent = "Guia de Acessos";
                document.querySelector('.page-content p').textContent = "Bem-vindo ao Guia de Acesso da Mercedes-Benz do Brasil. Este guia oferece suporte para solicitação de acessos aos principais sistemas e pastas. Ao clicar no 'Menu', você encontrará os mesmos, e de acordo com sua necessidade, escolha o sistema desejado. Lá, você será guiado passo a passo para solicitar seu acesso de maneira eficiente.";
            }
            // Fechar o menu
            menu.classList.remove('active');
        });
    });
});
