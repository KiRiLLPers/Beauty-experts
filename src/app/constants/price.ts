export const priceTable: Record<string, any> = {
    'cosmetology-massage': {
        metadata: {
            columns: [
                {
                    title: "услуга",
                    field: "service",
                },
                {
                    title: "цена",
                    field: "price",
                },
            ],
        },
        data: [
            {
                service: "Массаж лица (1 час)",
                price: "3 000 — 3 500 р.",
            },
            {
                service: "Массаж тела (1 час)",
                price: "4 000 — 4 500 р.",
            },
            {
                service: "Солевое обертывание",
                price: "6 000 р.",
            },
            {
                service: "Водоросли (1,5 часа)",
                price: "8 000 р.",
            },
            {
                service: "Водоросли (2 часа)",
                price: "10 000 р.",
            },
            {
                service: "Чистка лица",
                price: "2 500 — 3 000 р.",
            },
            {
                service: "Пилинги",
                price: "1 500 — 6 000 р.",
            },
        ],
    },
    'hairdressing': {
        metadata: {
            columns: [
                {
                    title: "услуга",
                    field: "service",
                },
                {
                    title: "топ-стилист",
                    field: "top",
                },
                {
                    title: "стилист",
                    field: "stylist",
                },
                {
                    title: "эксперт",
                    field: "expert",
                },
            ],
        },
        data: [
            {
                service: 'Стрижка женская',
                top: '6 000 — 8 000 р.',
                stylist: '4 000 р.',
                expert: '2 500 р.'
            },
            {
                service: 'Укладка',
                top: '2 500 — 3 000 р.',
                stylist: '2 000 р.',
                expert: '1 500 р.'
            },
            {
                service: 'Утюг, кудри',
                top: '3000 — 3 500 р.',
                stylist: '2 500 р.',
                expert: '2 000 р.'
            },
            {
                service: 'Прическа на длинные волосы',
                top: '4 500 р.',
                stylist: '3 000 - 3 500 р.',
                expert: ''
            },
            {
                service: 'Челка',
                top: '1 500 р.',
                stylist: '1 000 р.',
                expert: '800 р.'
            },
            {
                service: 'Шатуш/Айртач',
                top: '',
                stylist: '7 500 — 9 500 р.',
                expert: ''
            },
            {
                service: 'Химическая завивка',
                top: '',
                stylist: '10 000 - 15 000 р.',
                expert: ''
            },
            {
                service: 'Окраска кавер',
                top: '',
                stylist: '1 500 р.',
                expert: ''
            },
            {
                service: 'Стрижка детская',
                top: '2 500 р.',
                stylist: '1 500 - 2 000 р.',
                expert: '1 500 р.'
            },
            {
                service: 'Стрижка мужская',
                top: '3 500 - 4 000 р.',
                stylist: '2 000 р.',
                expert: '2 000 р.'
            },
            {
                service: 'Стрижка бороды',
                top: '',
                stylist: '600 р.',
                expert: ''
            },
            {
                service: 'ОКРАШИВАНИЕ',
                section: true,
            },
            {
                service: 'Короткое',
                top: '5 500 — 6 000 р.',
                stylist: '5 000 р.',
                expert: '4 000 р.'
            },
            {
                service: 'Среднее',
                top: '6 000 — 7 000 р.',
                stylist: '5 500 р.',
                expert: '4 500 р.'
            },
            {
                service: 'Длинное',
                top: '7 000 — 8 000 р.',
                stylist: '6 000 р.',
                expert: '5 000 р.'
            },
            {
                service: 'Сложное',
                top: '8 500 — 10 000 р.',
                stylist: '7 000 р.',
                expert: '5 500 р.'
            },
            {
                service: 'Мелирование ',
                section: true,
            },
            {
                service: 'Частичное',
                top: '5 000 — 6 000 р.',
                stylist: '4 500 р.',
                expert: '3 500 р.'
            },
            {
                service: 'Короткое',
                top: '6 000 — 6 500 р.',
                stylist: '5 000 р.',
                expert: '4 000 р.'
            },
            {
                service: 'Среднее',
                top: '6 500 — 8 000 р.',
                stylist: '6 000 р.',
                expert: '5 000 р.'
            },
            {
                service: 'Длинное',
                top: '7 500 — 9 000 р.',
                stylist: '6 500 р.',
                expert: '5 500 р.'
            },
        ]
    },
    'makeup': {
        metadata: {
            columns: [
                {
                    title: "услуга",
                    field: "service",
                },
                {
                    title: "дарья ботченко",
                    field: "daria",
                },
                {
                    title: "сабрина гафари",
                    field: "sofia",
                },
            ],
        },
        data: [
            {
                service: 'Макияж',
                daria: '9 000 — 10 000 р.',
                sofia: '5 000 р.'
            },
            {
                service: 'Образ',
                daria: '12 000 — 13 000 р.',
                sofia: '7 000 р.'
            },
            // {
            //     service: 'Оформление бровей',
            //     daria: '',
            //     sofia: '1 000 — 2 000 р.'
            // },
            {
                service: 'Урок для себя',
                daria: '20 000 р.',
                sofia: ''
            },
            {
                service: 'Обучение PROMAKEUP (повышение квалификации визажистов)',
                daria: '*  Цену уточняйте в салоне',
                sofia: ''
            },
        ]
    },
    'manicure': {
        metadata: {
            columns: [
                {
                    title: "услуга",
                    field: "service",
                },
                {
                    title: "стилист / топ-стилист",
                    field: "top",
                },
                // {
                //     title: "молодой эксперт",
                //     field: "expert",
                // },
            ]
        },
        data: [
            {
                service: 'маникюр',
                section: true,
            },
            {
                service: 'Экспресс маникюр (подпиливание с покрытием)',
                top: '1 000 р.',
                // expert: '600 р.'
            },
            {
                service: 'Маникюр (европейский)',
                top: '1 800 р.',
                // expert: '800 р.'
            },
            {
                service: 'Покрытие (основа + лак закрепитель) / лечение',
                top: '500 р. / 700 р.',
                // expert: '500 р.'
            },
            {
                service: 'Покрытие гель-лаком',
                top: '1 200 р.',
                // expert: '1 200 р.',
            },
            {
                service: 'Покрытие гель-лаком с выравниваемой базой',
                top: '1 200 р. / 1 700 р.',
                // expert: '1 200 р.',
            },
            {
                service: 'Наращивание ногтей',
                top: '5 000 р.',
                // expert: '3 000 р.',
            },
            {
                service: 'Укрепление натуральных ногтей жестким гелем',
                top: '1 200 р. / 1 700 р.',
                // expert: '1 200 р.',
            },
            {
                service: 'Снятие гель-лака',
                top: '300 р.',
                // expert: '200 р.',
            },
            {
                service: 'Снятие лака',
                top: '50 р.',
                // expert: '50 р.',
            },
            {
                service: 'Снятие нарощенных ногтей',
                top: '1000 р.',
                // expert: '600 р.',
            },
            {
                service: 'Полировка ногтей с воском',
                top: '500 р.',
                // expert: '500 р.',
            },
            {
                service: 'Массаж рук (15 мин.)',
                top: '500 р.',
                // expert: '300 р.',
            },
            // {
            //     service: 'Крем + парафин',
            //     top: '600 р. - 1 000 р.',
            //     expert: '600 р. - 1 000 р.',
            // },
            {
                service: 'SPA-уход',
                top: '600 - 1 000 р.',
                // expert: '600 - 1 000 р.',
            },
            {
                service: 'Покрытие гель-лаком “Французский маникюр',
                top: '1 700 р.',
                // expert: '1 500 р.',
            },
            {
                service: 'Стемпинг',
                top: 'от 50 р.',
                // expert: '',
            },
            {
                service: 'Градиент',
                top: '100 — 1 000 р.',
                // expert: '',
            },
            {
                service: 'Втирка пигментами',
                top: '100 — 500 р.',
                // expert: '',
            },
            {
                service: 'педикюр',
                section: true,
            },
            {
                service: 'Педикюр',
                top: '3 200 р. / 3 500 р.',
                // expert: '2700 р.',
            },
            {
                service: 'Педикюр мужской',
                top: '3 200 р. / 3 500 р.',
                // expert: '2700 р.',
            },
            {
                service: 'Обработка ногтей',
                top: '2 100 р. / 2 300 р.',
                // expert: '1500 р.',
            },
            {
                service: 'Обработка ступней',
                top: '2 100 р. / 2 300 р.',
                // expert: '1500 р.',
            },
            {
                service: 'Обработка одного вросшего ногтя',
                top: '500 р.',
                // expert: '',
            },
            {
                service: 'Полировка ногтей воском',
                top: '500 р.',
                // expert: '500 р.',
            },
            {
                service: 'Массаж ног (15 мин.)',
                top: '500 р.',
                // expert: '',
            },
            {
                service: 'Массаж ног (30 мин.)',
                top: '1000 р.',
                // expert: '',
            },
            {
                service: 'SPA-уход',
                top: '600 - 1 000 р.',
                // expert: '',
            },
            {
                service: 'Титановая нить',
                top: '3 500 р.',
                // expert: '',
            },
            {
                service: 'Скоба Фрезера',
                top: '4 000 р.',
                // expert: '',
            },
            {
                service: 'Протезирование одного ногтя',
                top: '200 — 500 р.',
                // expert: '',
            },
            {
                service: 'Обработка глубоких трещин с тейповым фиксатором 1шт',
                top: '500 р.',
                // expert: '',
            },
            {
                service: 'Переустановка корректирующих систем каждый месяц',
                top: '1 000 р.',
                // expert: '',
            },
        ]
    }
};
