Feature: Login

  Scenario: Login com sucesso
    Given o usuário está na página de login
    When o usuário preenche o usuario e a senha corretamente
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial