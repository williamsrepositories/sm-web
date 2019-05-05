/**
 * ****************************************************
 * @Copyright (c) 2017, Spell Master.
 * @Version: 4.0
 * @Requisitos: Navegador compatível com HTML 5
 * ****************************************************
 * @class Gerencia APP TAB.
 * ****************************************************
 * @changes:
 * * 2.0 Spell Master
 * Modificado a captura do elemento tab para data-* evt
 * * 3.0 Spell Master
 * - Alterado todo o comportamento, não precisando mais
 * vincular por parâmetros qual tab deve ser aberta.
 * Altomaticamente detecta o índice do botão e abre
 * o conteúdo pegando esse índice.
 * - Adicionado parâmetro opcional para poder gerenciar
 * as funções em diferentes locais do html.
 * - Adicionado suporte a funções por meio de ativação
 * externa.
 * * 4.0 Spell Master
 * - Removido métodos desnecessário.
 * - Simplificado o uso.
 * ****************************************************
 * * @param propriety : (opcional) elemento para
 * determinar o conjunto de ativação.
 * ****************************************************
 */
var TabPaginator = function (propriety) {

    var $node = propriety ? document.getElementById(propriety) : document;
    var $tl = $node.getElementsByClassName('tab-link');
    var $tb = $node.getElementsByClassName('tab-body');

    tabButtons();
    openTab();
    this.openTab = openTab;

    /**
     * ************************************************
     * @function Inicia os botões
     * ************************************************
     **/
    function tabButtons() {
        var $i;
        for ($i = 0; $i < $tl.length; $i++) {
            $tl[$i].addEventListener('click', getTab($i + 1), false);
        }
    }

    /**
     * ************************************************
     * @function Abre a tab solicitada
     * @param index : índice do elemento class
     * ************************************************
     **/
    function getTab(index) {
        return function () {
            openTab(index);
        };
    }

    /**
     * ************************************************
     * @function Abre a tab solicitada
     * @param tab : índice da tab para abrir
     * ************************************************
     **/
    function openTab(tab) {
        closeTabs();
        var $tab = (tab ? parseInt(tab - 1) : 0);
        $tl[$tab].classList.add('active');
        $tb[$tab].classList.add('active');
    }

    /**
     * ************************************************
     * @function Fecha todas as tabs para correta
     * abertura da atual
     * ************************************************
     **/
    function closeTabs() {
        var $i;
        for ($i = 0; $i < $tl.length; $i++) {
            $tl[$i].classList.remove('active');
            $tb[$i].classList.remove('active');
        }
    }

};
