const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp: '11987654321',
        bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.\n\n\nComecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com isso!'
    }

    classValue = {
        subject: 1,
        cost: "40,00"
    }

    classScheduleValues = [
        {
            weekday: 2,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 570,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })
    
    // Consultar dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor e trazer junto todos os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // Consultar as class_schedule
    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "2"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "570"
        AND class_schedule.time_to > "570";
    `)
    // console.log(selectClassesSchedules)

})