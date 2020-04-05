describe('register Test', () => {
    it('Visit the app', () => {
        cy.visit('/register');
        // cy.contains('个人中心').click();
        // cy.url().should('include', '/login');
        cy.get('.testRuser').type('fake@email.com');
        cy.get('.testRpwd').type('123456');
        cy.get('.testRrepeatpwd').type('123456');
        cy.get('.testzhuce').click();

        // 设置个人信息
        cy.url().should('include', '/setInfo');
        cy.visit('/setInfo');
        cy.get('.testchick').click();
        cy.get('.testage').type('18');
        cy.get('.testphone').type('13281811386');
        cy.get('.testschool').type('成都大学');
        cy.get('.testlocation').type('四川省成都市龙泉驿区十陵上街1号信息科学与工程学院');
        cy.get('.testdesc').type(
            '我今年18岁，现在就读于成都大学，我平时喜欢看电影，最喜欢的电影明星是刘亦菲。喜欢的电影类型是科幻爱情类的电影，如果有一样喜欢这类电影的我们可以交一个朋友呀！'
        );
        cy.get('.testtijiao').click();
        cy.url().should('include', '/profile');
    });
});
