export const categories = [
  {
    id: 3,
    name: "Khoai Lang",
    photo_url: require("../../assets/pic/BakedSweetPotatoes/0.jpg"),
  },
  {
    id: 1,
    name: "Nước ép",
    photo_url: require("../../assets/pic/nuocep/logonuocep.jpg"),
  },
  {
    id: 2,
    name: "Rau củ",
    photo_url: require("../../assets/pic/saladdaume/logoraucuqua.jpg"),
  },
  {
    id: 4,
    name: "Rau câu",
    photo_url: require("../../assets/pic/raucau/logo/0.jpg"),
  },
  {
    id: 0,
    name: "Kem",
    photo_url: require("../../assets/pic/BakedSweetPotatoes/0.jpg"),
  },
];

export const recipes = [
  {
    recipeId: 1,
    categoryId: 3,
    title: "Khoai Lang Nướng",
    photo_url: require("../../assets/pic/BakedSweetPotatoes/1.jpg"),
    photosArray: [
      require("../../assets/pic/BakedSweetPotatoes/1.jpg"),
      require("../../assets/pic/BakedSweetPotatoes/2.jpg"),
      require("../../assets/pic/BakedSweetPotatoes/3.jpg"),
    ],
    time: "75 tới 90 phút",
    ingredients: [[0, "4 trái"]],
    description:
      "Bước 1: Lựa chọn\n\nHãy chắc chắn chọn khoai tây có hình dạng và trọng lượng tương tự. Điều này giúp giữ cho thời gian nấu nhất quán. Nếu điều đó thật khó tìm, chỉ cần loại bỏ các khoai tây đã sẵn sàng và giữ những người lớn hơn trong lò cho đến khi thịt mềm.\n\nBước 2: Bọc trong giấy bạc\n\nĐể ngăn ngừa mất độ ẩm và tạo ra một spud rang đều, tốt nhất là bọc chúng riêng lẻ bằng giấy bạc. Sử dụng chỉ đủ lá để che phủ bề mặt, không cần các lớp quá mức, nhưng đảm bảo chúng được bọc chặt.\n\nBước 3: nướng\n\nLàm nóng làm cho các enzyme trong khoai tây thay đổi tinh bột thành maltose có vị ngọt, ở nhiệt độ bên trong 57ºC. Sự chuyển đổi này dừng ở 77ºC, do đó, nhiệt độ tăng dần và dần dần cho phép chuyển đổi đường nhiều hơn. Kết quả, khoai tây ngọt ngào nhất từ ​​trước đến nay! Tôi sử dụng nhiệt độ vừa phải 191ºC trong toàn bộ quá trình nấu ăn. Mất khoảng 75 đến 90 phút để nướng khoai lang, tùy thuộc vào kích thước của nó. Một chút quá chặng đường xuyên qua nấu ăn, lật khoai tây. Điều này đảm bảo rằng cả hai bên được tiếp xúc với nhiệt bị mắc kẹt của lò để nấu ăn.\n\nBước 4: Kiểm tra độ mềm\n\nLàm thế nào để bạn biết khi nào khoai tây đã sẵn sàng? Trước hết, bạn có thể ngửi thấy mùi thơm caramel lấp đầy nhà bếp, nhờ vào Maillard Browning xảy ra bên trong củ được bọc. Để kiểm tra độ mềm, nhanh chóng vắt các mặt của khoai tây, nếu bề mặt vẫn cảm thấy khó khăn mà không cần cho, nó cần nhiều thời gian hơn. Khi một cái nĩa hoặc dao có thể dễ dàng xuyên qua trung tâm của khoai tây không có sức đề kháng, nó đã sẵn sàng để ăn.\n\nBước 5: Thưởng thức!\n\nRễ khoai tây tinh bột dễ dàng lên bằng một cái nĩa, tạo ra và kết cấu nhẹ và kem. Tôi thích chỉ lấy một cái muỗng và ăn những miếng khoai tây nóng đường ống, nó thực sự không cần thêm nhiều. Phương pháp chống ngu ngốc này mang lại khoai tây có hương vị nhất.",
  },
  {
    recipeId: 2,
    categoryId: 2,
    title: "Salad Đậu Gà Sốt Bơ Mè",
    photo_url: require("../../assets/pic/saladdaume/0.jpg"),
    photosArray: [
      require("../../assets/pic/saladdaume/0.jpg"),
      require("../../assets/pic/saladdaume/1.jpg"),
      require("../../assets/pic/saladdaume/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [5, "100gr"],
      [6, "10gr"],
      [7, "1/3"],
      [8, "10gr"],
      [9, "100gr"],
    ],
    description:
      "In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.",
  },
  {
    recipeId: 3,
    categoryId: 1,
    title: "Nước ép táo",
    photo_url: require("../../assets/pic/nuocep/eptao/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/eptao/1.jpg"),
      require("../../assets/pic/nuocep/eptao/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [10, "4 muỗng"],
      [11, "4"],
      [12, "1/2"],
      [13, "100 ml"],
    ],
    description:
      " Bước 1: \n\nSơ chế nguyên liệu Táo mua về các bạn mang ngâm với nước muối khoảng 10 - 15 phút sau đó rửa lại thật sạch với nước, để ráo. Dùng dao cắt táo thành các hạt lựu dày khoảng 1 lóng tay, đồng thời loại bỏ phần hạt.\n\n Bước 2: \n\nÉp trái cây Cho táo vào máy ép trái cây, thêm khoảng 4 muỗng canh nước đường, 100ml nước lọc và 1/2 trái chanh vắt lấy nước. Khỏi động máy và ép lấy phần nước táo.\n\n Bước 3:\n\n Thành phẩm Bỏ thêm vài viên đá lạnh vào ly rồi cho phần nước ép táo vào sau đó trang trí cho đẹp mắt là hoàn thành. Nước ép táo sau khi hoàn thành có màu vàng đẹp mắt cùng mùi thơm đặc trưng của tạo cực hấp dẫn. Khi uống bạn sẽ cảm nhận được vị chua chua, ngọt ngọt, mát lạnh sảng khoái đã khát vô cùng. Thành phẩm Bỏ thêm vài viên đá lạnh vào ly rồi cho phần nước ép táo vào sau đó trang trí cho đẹp mắt là hoàn thành. Nước ép táo sau khi hoàn thành có màu vàng đẹp mắt cùng mùi thơm đặc trưng của tạo cực hấp dẫn. Khi uống bạn sẽ cảm nhận được vị chua chua, ngọt ngọt, mát lạnh sảng khoái đã khát vô cùng.",
  },
  {
    recipeId: 4,
    categoryId: 3,
    title: " Khoai Lang Nướng Nước Cốt Dừa",
    photo_url: require("../../assets/pic/khoailangnuongnuoccotdua/0.jpg"),
    photosArray: [
      require("../../assets/pic/khoailangnuongnuoccotdua/1.jpg"),
      require("../../assets/pic/khoailangnuongnuoccotdua/3.jpg"),
    ],
    time: "45 phút",
    ingredients: [
      [0, "2 trái"],
      [1, "200 gr"],
      [2, "20 ml"],
      [3, "50 ml"],
      [4, "100 ml"],
    ],
    description:
      "Bước 1: Nghiền khoai lang\n\nBào vỏ khoai lang, rửa sạch rồi cắt khúc. Sau đó, cho khoai lang vào xửng và hấp chín mềm. Tiếp theo, dùng nĩa tán nhuyễn mịn khoai lang.\n\n Bước 2: Trộn bột bánh\n\nCho thêm vào tô khoai 20ml dầu dừa, 50ml sữa đặc, 100ml nước cốt dừa. Dùng máy xay tay để xay nhuyễn mịn hỗn hợp. Sau đó, cho vào 200gr bột mì rồi khuấy đều cho hỗn hợp hòa quyện.\n\n Bước 3: Nướng bánh\n\n Làm nóng lò nưóng trước ở nhiệt độ 180 độ C trong 15 phút. Phết 1 lớp dầu ăn mỏng vào khuôn rồi đổ bột vào. Sau đó, cho bánh vào lò, nướng 30 phút ở 180 độ C.\n\n Bước 4: thưởng thức \n\n Bánh khoai lang nướng thơm nức mũi, từng muỗng bánh mềm dẻo, bùi bùi vị khoai lang cùng độ béo ngọt đặc trưng từ nước cốt dừa.",
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: "Nước ép táo cam",
    photo_url: require("../../assets/pic/nuocep/eptaocam/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/eptaocam/1.jpg"),
      require("../../assets/pic/nuocep/eptaocam/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [11, "5 trái"],
      [14, "6 trái cam"],
      [15, "1 ít"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu \n\n Sơ chế nguyên liệu Để loại sạch bụi bẩn, táo mua về các bạn mang ngâm với nước muối khoảng 15 phút rồi vớt ra rửa lại thật sạch, để ráo. Cam rửa sạch với nước, sau đó dùng dao gọt sạch phần vỏ bên ngoài.\n\n Bước 2: Ép trái cây\n\n Ép trái cây khởi động máy ép, lần lượt cho táo và cam vào máy và ép lấy nước cho đến khi hết lượng nguyên liệu đã chuẩn bị.\n\n Buớc 3: thành phẩm\n\n Chỉ với vài bước cực đơn giản bạn đã có ngay ly nước ép táo cam vàng ươm đẹp mắt rồi đấy! Nước ép có vị chua ngọt nhẹ dịu cùng mùi thơm của táo và cam rất dễ chịu. Bạn có thể cho thêm vài viên đá lạnh để cảm nhận trọn vẹn hương vị của thức uống này nhé!",
  },
  {
    recipeId: 6,
    categoryId: 1,
    title: "Nước ép táo dâu",
    photo_url: require("../../assets/pic/nuocep/eptaodau/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/eptaodau/1.jpg"),
      require("../../assets/pic/nuocep/eptaodau/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [11, "2 trái "],
      [16, "5 trái"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu \n\nTáo rửa sạch với nước rồi dùng dao cắt múi cau, bỏ hạt. Dâu tây rửa sạch, cắt bỏ phần cuống sau đó chẻ đôi.\n\nBước 2: Ép trái cây\n\nCho toàn bộ phần táo và dâu tây vào máy ép trái cây và ép lấy nước. \n\nBước 3: Thành phẩm \n\nNước ép táo dâu tây là một trong những thức uống thơm ngon với vị chua ngọt hấp dẫn, vừa có thể giải khát vừa dùng làm thức uống giảm cân cùng vô cùng tuyệt vời đấy! Lưu ngay công thức này vào sổ tay nấu ăn và trổ tài thực hiện ngay cho cả nhà cùng thưởng thức nhé!",
  },
  {
    recipeId: 7,
    categoryId: 1,
    title: "Nước ép táo lê",
    photo_url: require("../../assets/pic/nuocep/eptaole/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/eptaole/1.jpg"),
      require("../../assets/pic/nuocep/eptaole/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [11, "8 trái"],
      [17, "8 trái"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nTáo và lê mua về các bạn rửa thật sạch với nước sau đó để ráo. Dùng dao cắt đôi, tách bỏ hạt và cuống của táo và lê.\n\nBước 2: Ép trái cây\n\nKhởi động máy ép trái cây, cho táo và lê vào và ép lấy nước. Lần lượt lặp lại các bước này cho đến khi hết lượng nguyên liệu đã chuẩn bị.\n\nBước 3: Thành phẩm\n\nVậy là bạn đã hoàn thành xong món nước ép táo lê đầy thơm ngon và hấp dẫn rồi đấy! Vị chua chua của táo hòa cùng với vị ngọt của lê tạo nên một thức uống khó cưỡng vô cùng, vừa giúp bạn tăng cường sức đề kháng lại đẹp dáng, đẹp da nữa đó nhé!.",
  },
  {
    recipeId: 8,
    categoryId: 1,
    title: "Nước ép táo thơm dưa leo",
    photo_url: require("../../assets/pic/nuocep/nuocepdualeo/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/nuocepdualeo/1.jpg"),
      require("../../assets/pic/nuocep/nuocepdualeo/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [11, "1/2 trái"],
      [17, "1/2 trái"],
      [18, "100 gr"],
      [12, "1 trái"],
      [20, "10 gr"],
      [21, "100 gr"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nCần tây, dưa leo, cải bó xôi rửa sạch cắt khúc. Gừng gọt vỏ cắt nhỏ. Chanh cắt đôi.Thơm gọt vỏ, bỏ mắt rồi cắt thành miếng dài.Táo sau khi sơ chế cắt thành từng miếng.\n\nBước 2: Ép trái cây\n\nĐầu tiên cho cần tây vào máy ép, sau đó đến táo, thơm, dưa leo rồi cải bó xôi và cuối cùng là gừng. Sau khi đã ép xong vắt một chút nước chanh vào ly nước ép, khuấy đều là xong.\n\nBước 3: Thành phẩm\n\nNước ép táo thơm dưa leo với hương vị tự nhiên, chua chua, ngọt ngọt rất bắt vị. Với 2 bước đơn giản là bạn đã có ngay một ly nước ép táo ngon bổ dưỡng cho gia đình rồi. Đây cũng là một trong những thức uống tốt cho quá trình giảm cân đấy.",
  },
  {
    recipeId: 9,
    categoryId: 1,
    title: "Nước ép táo cần ớt",
    photo_url: require("../../assets/pic/nuocep/epcantao/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/epcantao/1.jpg"),
      require("../../assets/pic/nuocep/epcantao/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [11, "1 trái"],
      [21, "50 g"],
      [13, "100 g"],
      [10, "50 g"],
      [22, "1 quả"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nCần tây bỏ phần già, lá úa rửa sạch rồi cắt thành từng khúc. Ớt chuông bỏ hạt, rửa sạch bổ làm 4.Táo sau khi sơ chế bỏ hạt rồi bổ làm 8 miếng.\n\nBước 2: Ép trái cây\n\nSau khi sơ chế nguyên liệu xong, bạn cho lần lượt nguyên liệu vào máy ép để ép lấy nước quả, sau đó khuấy phần nước ép rau củ 20ml nước đường nữa là xong.\n\nBước 3: Thành phẩm\n\nNước ép táo cần tây ớt có vị ngọt, hơi cay và hăng nhẹ, nhưng lại rất dễ uống và là thức uống bổ dưỡng giúp làm đẹp da từ bên trong, giảm cân tốt và đặc biệt là tăng cường sức đề kháng cho cơ thể.",
  },
  {
    recipeId: 10,
    categoryId: 1,
    title: "Nước ép cà rốt",
    photo_url: require("../../assets/pic/nuocep/epcarot/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/epcarot/1.jpg"),
      require("../../assets/pic/nuocep/epcarot/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [23, "500 g"],
      [12, "10 ml"],
      [24, "10 ml"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nVới cách làm này, chúng ta sẽ ép cả vỏ của củ cà rốt, vì thế mà bạn cần rửa cà rốt thật sạch nhé. Bạn có thể sử dụng một chiếc bàn chải đánh răng mới, sạch và chà nhẹ nhàng để loại bỏ hết đất, cát (nếu có). Tuy nhiên, nếu bạn không mua được cà rốt trồng hữu cơ thì tốt nhất bạn nên gọt bỏ vỏ của cà rốt.\nTiếp theo, bạn cắt bỏ phần đầu cuống rồi cắt đôi củ cà rốt theo chiều dọc.\n\nBước 2: Ép trái cây\n\nBạn nên vệ sinh máy ép trái cây trước khi cho cà rốt vào bằng cách khởi động máy, sau đó cho một ít nước lọc vào máy và đợi cho phần nước này chảy ra hết.\nTiếp theo, bạn khởi động máy ép và cho cà rốt vào để ép lấy nước.\n\nBước 3: Thành phẩm\n\nBạn rót phần nước ép cà rốt vào ly thủy tinh, sau đó cho thêm 1 vài giọt nước cốt chanh, 1 chút siro đường rồi khuấy đều lên.\nTiếp theo, bạn cho thêm đá viên và trang trí một lát cà rốt lên trên miệng ly là có thể thưởng thức được rồi.",
  },
  {
    recipeId: 11,
    categoryId: 1,
    title: "Nước ép dưa hấu",
    photo_url: require("../../assets/pic/nuocep/epduahau/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/epduahau/1.jpg"),
      require("../../assets/pic/nuocep/epduahau/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [25, "1 trái"],
      [15, "1 ít"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nDưa hấu mua về rửa qua với nước sạch, gọt bỏ vỏ, giữ lại phần thịt. Bạn có thể lấy hết hạt, hoặc để hạt đều được, sau đó cắt dưa hấu thành các miếng nhỏ cho dễ xay.\n\nBước 2: Cho tất cả thịt dưa hấu đã cắt vào máy xay sinh tố và xay nhuyễn ở mức lớn trong khoảng 3 - 5 phút. Cho tiếp 1 ít muối (khoảng 1/4 muỗng cà phê) vào và xay thêm khoảng 1 phút nữa đến khi dưa hấu nhuyễn mịn thì tắt máy.\n\nBước 3: Thành phẩm\n\nCho hỗn hợp vừa xay qua rây lược để loạt bỏ phần hạt thừa, ta sẽ có được phần nước ép thanh mát. Bạn có thể cho nước ép vào chai thủy tinh và bảo quản mát trong tủ lạnh thì có thể dùng trong 1 - 2 ngày nhé! Nước ép dưa hấu thơm ngon, bổ dưỡng với vị ngọt mát tươi ngon và màu đỏ thẫm đảm bảo sẽ khiến mọi người cảm giác thật sảng khoái đấy",
  },
  {
    recipeId: 12,
    categoryId: 1,
    title: "Nước ép dưa hấu thơm",
    photo_url: require("../../assets/pic/nuocep/epduahauthom/0.jpg"),
    photosArray: [
      require("../../assets/pic/nuocep/epduahauthom/1.jpg"),
      require("../../assets/pic/nuocep/epduahauthom/2.jpg"),
    ],
    time: "15 phút",
    ingredients: [
      [25, "1 trái"],
      [19, "1/2 trái"],
      [26, "1 muỗng"],
      [27, "100 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nDưa hấu mua về rửa qua với nước sạch, gọt bỏ vỏ, giữ lại phần thịt. Bạn có thể lấy hết hạt, hoặc để hạt đều được, sau đó cắt dưa hấu thành các miếng nhỏ cho dễ xay.\n\nBước 2: Cho tất cả thịt dưa hấu đã cắt vào máy xay sinh tố và xay nhuyễn ở mức lớn trong khoảng 3 - 5 phút. Cho tiếp 1 ít muối (khoảng 1/4 muỗng cà phê) vào và xay thêm khoảng 1 phút nữa đến khi dưa hấu nhuyễn mịn thì tắt máy.\n\nBước 3: Thành phẩm\n\nCho hỗn hợp vừa xay qua rây lược để loạt bỏ phần hạt thừa, ta sẽ có được phần nước ép thanh mát. Bạn có thể cho nước ép vào chai thủy tinh và bảo quản mát trong tủ lạnh thì có thể dùng trong 1 - 2 ngày nhé! Nước ép dưa hấu thơm ngon, bổ dưỡng với vị ngọt mát tươi ngon và màu đỏ thẫm đảm bảo sẽ khiến mọi người cảm giác thật sảng khoái đấy",
  },
  {
    recipeId: 12,
    categoryId: 3,
    title: "Khoai lang viên chiên",
    photo_url: require("../../assets/pic/khoailang/khoailangvienchien/0.jpg"),
    photosArray: [
      require("../../assets/pic/khoailang/khoailangvienchien/1.jpg"),
      require("../../assets/pic/khoailang/khoailangvienchien/2.jpg"),
    ],
    time: "60 phút",
    ingredients: [
      [0, "500 g"],
      [10, "40 g"],
      [13, "300 ml"],
      [1, "300 ml"],
      [28, "200 ml"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: "Chè khoai lang cốt dừa",
    photo_url: require("../../assets/pic/khoailang/chekhoailangcotdua/0.jpg"),
    photosArray: [
      require("../../assets/pic/khoailang/chekhoailangcotdua/1.jpg"),
      require("../../assets/pic/khoailang/chekhoailangcotdua/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [0, "2 củ"],
      [4, "100 ml"],
      [15, "1/3 muỗng cafe"],
      [10, "165 g"],
      [1, "15 muỗng canh"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 14,
    categoryId: 3,
    title: "Chè khoai lang đậu xanh",
    photo_url: require("../../assets/pic/khoailang/chekhoailangdauxanh/0.jpg"),
    photosArray: [
      require("../../assets/pic/khoailang/chekhoailangdauxanh/1.jpg"),
      require("../../assets/pic/khoailang/chekhoailangdauxanh/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [0, "2 củ"],
      [15, "7 muỗng"],
      [10, "165 g"],
      [1, "5 muỗng canh"],
      [29, "100 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 14,
    categoryId: 3,
    title: "Chè khoai lang bí đỏ",
    photo_url: require("../../assets/pic/khoailang/chekhoailangbido/0.jpg"),
    photosArray: [
      require("../../assets/pic/khoailang/chekhoailangbido/1.jpg"),
      require("../../assets/pic/khoailang/chekhoailangbido/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [0, "2 củ"],
      [30, "300 g"],
      [29, "100 g"],
      [10, "10 muỗng canh"],
      [31, "50 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 15,
    categoryId: 3,
    title: "Chè khoai lang đậu đen",
    photo_url: require("../../assets/pic/khoailang/chekhoailangdauden/0.jpg"),
    photosArray: [
      require("../../assets/pic/khoailang/chekhoailangdauden/1.jpg"),
      require("../../assets/pic/khoailang/chekhoailangdauden/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [0, "4 củ"],
      [10, "10 muỗng canh"],
      [32, "100 g"],
      [15, "1 ít"],
      [4, "100 ml"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 16,
    categoryId: 2,
    title: "Bông bí xào tôm",
    photo_url: require("../../assets/pic/raucu/bongbixaotom/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucu/bongbixaotom/1.jpg"),
      require("../../assets/pic/raucu/bongbixaotom/2.jpg"),
    ],
    time: "60 phút",
    ingredients: [
      [34, "4 củ"],
      [35, "100 g"],
      [33, "1 ít"],
      [28, "1 ít"],
      [15, "1 ít"],
      [36, "Hạt niêm"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 17,
    categoryId: 2,
    title: "Bông bí xào thịt bò",
    photo_url: require("../../assets/pic/raucu/bongbixaothibo/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucu/bongbixaothibo/1.jpg"),
      require("../../assets/pic/raucu/bongbixaothibo/2.jpg"),
    ],
    time: "60 phút",
    ingredients: [
      [37, "100 g"],
      [35, "100 g"],
      [33, "1 ít"],
      [28, "1 ít"],
      [15, "1 ít"],
      [36, "Hạt niêm"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 18,
    categoryId: 2,
    title: "Salad bơ trứng gà",
    photo_url: require("../../assets/pic/raucu/saladtrung/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucu/saladtrung/1.jpg"),
      require("../../assets/pic/raucu/saladtrung/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [42, "1 nhánh"],
      [41, "1 ít"],
      [40, "2 quả"],
      [33, "1 ít"],
      [43, "1 ít"],
      [28, "1 muỗng canh"],
      [15, "1 ít"],
      [12, "1 ít"],
      [9, "1 ít"],
      [7, "1 ít"],
      [5, "1 ít"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 19,
    categoryId: 2,
    title: "Salad bắp cải tím",
    photo_url: require("../../assets/pic/raucu/saladbapcaitim/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucu/saladbapcaitim/1.jpg"),
      require("../../assets/pic/raucu/saladbapcaitim/2.jpg"),
    ],
    time: "40 phút",
    ingredients: [
      [42, "1 nhánh"],
      [41, "1 ít"],
      [40, "2 quả"],
      [33, "1 ít"],
      [43, "1 ít"],
      [28, "1 muỗng canh"],
      [15, "1 ít"],
      [12, "1 ít"],
      [9, "1 ít"],
      [7, "1 ít"],
      [5, "1 ít"],
      [3, "10 g"],
      [23, "1 củ"],
      [44, "100 g"],
      [43, "300 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 20,
    categoryId: 2,
    title: "Salad rong nho thanh cua",
    photo_url: require("../../assets/pic/raucu/Saladrongnhothanhcua/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucu/Saladrongnhothanhcua/1.jpg"),
      require("../../assets/pic/raucu/Saladrongnhothanhcua/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [46, "100 g"],
      [47, "100 g"],
      [9, "100 g"],
      [5, "300 g"],
      [44, "100 g"],
      [43, "1 ít"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 21,
    categoryId: 2,
    title: "Salad rong nho và tôm tươi",
    photo_url: require("../../assets/pic/raucu/saladtomrongnho/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucu/saladtomrongnho/1.jpg"),
      require("../../assets/pic/raucu/saladtomrongnho/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [47, "100 g"],
      [34, "100 g"],
      [23, "100 g"],
      [5, "200 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 22,
    categoryId: 2,
    title: "Salad rong nho trộn cá ngừ",
    photo_url: require("../../assets/pic/raucu/saladdauhurongnhocangu/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucu/saladdauhurongnhocangu/1.jpg"),
      require("../../assets/pic/raucu/saladdauhurongnhocangu/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [48, "1 hộp"],
      [49, "50 g"],
      [47, "100 g"],
      [23, "100 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 23,
    categoryId: 4,
    title: "Rau câu nước cốt dừa",
    photo_url: require("../../assets/pic/raucau/raucaucotdua/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucau/raucaucotdua/1.jpg"),
      require("../../assets/pic/raucau/raucaucotdua/2.jpg"),
    ],
    time: "20 phút",
    ingredients: [
      [50, "1 gói"],
      [10, "10 muỗng canh"],
      [13, "1.5 l"],
      [4, "150 ml"],
      [100, "100 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 24,
    categoryId: 4,
    title: "Rau câu nước cốt dừa cà phê",
    photo_url: require("../../assets/pic/raucau/raucaucotduacafe/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucau/raucaucotduacafe/1.jpg"),
      require("../../assets/pic/raucau/raucaucotduacafe/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [50, "1 gói"],
      [10, "10 muỗng canh"],
      [13, "1.5 l"],
      [4, "150 ml"],
      [100, "100 g"],
      [51, "1 gói cafe"],
      [3, "50 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 25,
    categoryId: 4,
    title: "Rau câu milo",
    photo_url: require("../../assets/pic/raucau/raucaumilo/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucau/raucaumilo/1.jpg"),
      require("../../assets/pic/raucau/raucaumilo/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [10, "10 muỗng canh"],
      [13, "500 ml"],
      [52, "3 gói"],
      [50, "2 gói"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 26,
    categoryId: 4,
    title: "Rau câu lá dứa nhân phô mai",
    photo_url: require("../../assets/pic/raucau/raucauphomai/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucau/raucauphomai/1.jpg"),
      require("../../assets/pic/raucau/raucauphomai/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [10, "10 muỗng canh"],
      [13, "500 ml"],
      [53, "3 gói"],
      [50, "2 gói"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 27,
    categoryId: 4,
    title: "Rau câu trung thu nhân bánh flan",
    photo_url: require("../../assets/pic/raucau/raucautrungthunhanbanhflan/0.jpg"),
    photosArray: [
      require("../../assets/pic/raucau/raucautrungthunhanbanhflan/1.jpg"),
      require("../../assets/pic/raucau/raucautrungthunhanbanhflan/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [10, "10 muỗng canh"],
      [13, "500 ml"],
      [52, "3 gói"],
      [54, "1 cái"],
      [3, "10 g"],
      [4, "100 ml"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 28,
    categoryId: 4,
    title: "Kem chuối nước cốt dừa",
    photo_url: require("../../assets/pic/kem/kemchuoi/0.jpg"),
    photosArray: [
      require("../../assets/pic/kem/kemchuoi/1.jpg"),
      require("../../assets/pic/kem/kemchuoi/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [55, "3 trái"],
      [10, "15 g"],
      [4, "300 ml"],
      [3, "50 ml"],
      [1, "15 g"],
      [55, "50 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 29,
    categoryId: 4,
    title: "Kem dưa hấu sữa đặc",
    photo_url: require("../../assets/pic/kem/kemduahau/0.jpg"),
    photosArray: [
      require("../../assets/pic/kem/kemduahau/1.jpg"),
      require("../../assets/pic/kem/kemduahau/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [25, "1/2 trái"],
      [10, "10 muỗng canh"],
      [32, "100 g"],
      [15, "1 ít"],
      [4, "100 ml"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
  {
    recipeId: 30,
    categoryId: 4,
    title: " Kem socola",
    photo_url: require("../../assets/pic/kem/kemsocola/0.jpg"),
    photosArray: [
      require("../../assets/pic/kem/kemsocola/1.jpg"),
      require("../../assets/pic/kem/kemsocola/2.jpg"),
    ],
    time: "30 phút",
    ingredients: [
      [57, "100 g"],
      [10, "15 g"],
      [4, "300 ml"],
      [3, "50 ml"],
      [1, "15 g"],
      [55, "50 g"],
    ],
    description:
      "Bước 1: Sơ chế nguyên liệu\n\nGọt thật sạch vỏ khoai lang, rửa sạch rồi dùng dao cắt thành những hình vuông nhỏ. Sau đó, cho khoai vào xửng và mang đi hấp chín, bạn có thể dùng nĩa xiên vào từng miếng khoai, nếu thấy khoai bở và mềm thì lúc đó khoai đã được.\n\nBước 2: Chế biến\n\nCho khoai đã hấp chín ra một cái âu lớn, dùng muỗng dầm nhuyễn ra rồi từ từ cho thêm bột nếp vào và trộn đều lên. Tiếp theo, đổ từ từ 300 ml nước ấm vào trong âu rồi dùng tay nhào hỗn hợp thật kỹ đến khi tạo thành một khối dẻo thì dừng lại. Cho thêm đường trắng vào và tiếp tục nhào thêm một lần nữa cho đường bám vào bột.\n\nBước 3: Thành phẩm\n\nLấy một lượng nhỏ hỗn hợp ở bước 2 cho vào tay và vo tròn lại thành viên. Bạn cũng có thể sáng tạo nhiều hình thù khác nhau theo sở thích của mình. Nếu hỗn hợp để lâu và bị khô, bạn cho vào một ít nước ấm và nhào lại để khắc phục.\n\nCuối cùng, bắc một chiếc chảo lên bếp, cho dầu ăn vào. Khi thấy dầu đã nóng thì cho từng viên bánh khoai lang vào chiên. Dùng đũa đảo thật nhẹ để bánh không bị dính vào nhau, khi bánh đã vàng thì vớt ra một chiếc đĩa có lót sẵn giấy nến và thưởng thức.",
  },
];

export const ingredients = [
  {
    ingredientId: 0,
    name: "Khoai lang",
    photo_url: require("../../assets/pic/BakedSweetPotatoes/0.jpg"),
  },
  {
    ingredientId: 1,
    name: "Bột mì đa dụng",
    photo_url: require("../../assets/pic/nguyenlieu/botmy.jpg"),
  },
  {
    ingredientId: 2,
    name: "Dầu dừa",
    photo_url: require("../../assets/pic/nguyenlieu/daudua.jpg"),
  },
  {
    ingredientId: 3,
    name: "Sữa đặc",
    photo_url: require("../../assets/pic/nguyenlieu/suadac.jpg"),
  },
  {
    ingredientId: 4,
    name: "Nước cốt dừa",
    photo_url: require("../../assets/pic/nguyenlieu/nuoccotdua.jpg"),
  },
  {
    ingredientId: 5,
    name: "Rau xà lách",
    photo_url: require("../../assets/pic/nguyenlieu/salad.jpg"),
  },
  {
    ingredientId: 6,
    name: "Đậu gà",
    photo_url: require("../../assets/pic/nguyenlieu/dauga.jpg"),
  },
  {
    ingredientId: 7,
    name: "Quả bơ",
    photo_url: require("../../assets/pic/nguyenlieu/bo.jpg"),
  },
  {
    ingredientId: 8,
    name: "Mè đồi",
    photo_url: require("../../assets/pic/nguyenlieu/medoi.jpg"),
  },
  {
    ingredientId: 9,
    name: "Cà chua bi",
    photo_url: require("../../assets/pic/nguyenlieu/cachua.jpg"),
  },
  {
    ingredientId: 10,
    name: "Đường",
    photo_url: require("../../assets/pic/nguyenlieu/duong.jpg"),
  },
  {
    ingredientId: 11,
    name: "Táo",
    photo_url: require("../../assets/pic/nguyenlieu/tao.jpg"),
  },
  {
    ingredientId: 12,
    name: "Chanh",
    photo_url: require("../../assets/pic/nguyenlieu/chanh.jpg"),
  },
  {
    ingredientId: 13,
    name: "Nước lọc",
    photo_url: require("../../assets/pic/nguyenlieu/nuocloc.jpg"),
  },
  {
    ingredientId: 14,
    name: "Cam",
    photo_url: require("../../assets/pic/nguyenlieu/cam.jpg"),
  },
  {
    ingredientId: 15,
    name: "Muối",
    photo_url: require("../../assets/pic/nguyenlieu/muoi.jpg"),
  },
  {
    ingredientId: 16,
    name: "Dâu",
    photo_url: require("../../assets/pic/nguyenlieu/dau.jpg"),
  },
  {
    ingredientId: 17,
    name: "Lê",
    photo_url: require("../../assets/pic/nguyenlieu/le.jpg"),
  },
  {
    ingredientId: 18,
    name: "Dưa leo",
    photo_url: require("../../assets/pic/nguyenlieu/dualeo.jpg"),
  },
  {
    ingredientId: 19,
    name: "Thơm",
    photo_url: require("../../assets/pic/nguyenlieu/thom.jpg"),
  },
  {
    ingredientId: 20,
    name: "Gừng",
    photo_url: require("../../assets/pic/nguyenlieu/gung.jpg"),
  },
  {
    ingredientId: 21,
    name: "Cần tây",
    photo_url: require("../../assets/pic/nguyenlieu/cantay.jpg"),
  },
  {
    ingredientId: 22,
    name: "Ớt chuông",
    photo_url: require("../../assets/pic/nguyenlieu/otchuong.jpg"),
  },
  {
    ingredientId: 23,
    name: "Cà rốt",
    photo_url: require("../../assets/pic/nguyenlieu/carot.jpg"),
  },
  {
    ingredientId: 24,
    name: "Siro",
    photo_url: require("../../assets/pic/nguyenlieu/siro.jpg"),
  },
  {
    ingredientId: 25,
    name: "Dưa hấu",
    photo_url: require("../../assets/pic/nguyenlieu/duahau.jpg"),
  },
  {
    ingredientId: 26,
    name: "Mật ong",
    photo_url: require("../../assets/pic/nguyenlieu/matong.jpg"),
  },
  {
    ingredientId: 27,
    name: "Đá viên",
    photo_url: require("../../assets/pic/nguyenlieu/otchuong.jpg"),
  },
  {
    ingredientId: 28,
    name: "Dầu ăn",
    photo_url: require("../../assets/pic/nguyenlieu/dauan.jpg"),
  },
  {
    ingredientId: 29,
    name: "Đậu xanh",
    photo_url: require("../../assets/pic/nguyenlieu/dauxanh.jpg"),
  },
  {
    ingredientId: 30,
    name: "Bí đỏ",
    photo_url: require("../../assets/pic/nguyenlieu/bido.jpg"),
  },
  {
    ingredientId: 31,
    name: "Bí đỏ",
    photo_url: require("../../assets/pic/nguyenlieu/dauphong.jpg"),
  },
  {
    ingredientId: 32,
    name: "Đậu đen",
    photo_url: require("../../assets/pic/nguyenlieu/dauden.jpg"),
  },
  {
    ingredientId: 33,
    name: "Tiêu",
    photo_url: require("../../assets/pic/nguyenlieu/tieu.jpg"),
  },
  {
    ingredientId: 34,
    name: "Tôm",
    photo_url: require("../../assets/pic/nguyenlieu/tom.jpg"),
  },
  {
    ingredientId: 35,
    name: "Bông bí",
    photo_url: require("../../assets/pic/nguyenlieu/bongbi.jpg"),
  },
  {
    ingredientId: 36,
    name: "Hạt niêm",
    photo_url: require("../../assets/pic/nguyenlieu/hatniem.jpg"),
  },
  {
    ingredientId: 37,
    name: "Tỏi",
    photo_url: require("../../assets/pic/nguyenlieu/toi.jpg"),
  },
  {
    ingredientId: 38,
    name: "Thịt bò",
    photo_url: require("../../assets/pic/nguyenlieu/thitbo.jpg"),
  },
  {
    ingredientId: 39,
    name: "Nước tương",
    photo_url: require("../../assets/pic/nguyenlieu/nuoctuong.jpg"),
  },
  {
    ingredientId: 40,
    name: "Trứng gà",
    photo_url: require("../../assets/pic/nguyenlieu/trungga.jpg"),
  },
  {
    ingredientId: 41,
    name: "Giấm",
    photo_url: require("../../assets/pic/nguyenlieu/giam.jpg"),
  },
  {
    ingredientId: 42,
    name: "Lá bạc hà",
    photo_url: require("../../assets/pic/nguyenlieu/labacha.jpg"),
  },
  {
    ingredientId: 43,
    name: "Sốt mayonnaise",
    photo_url: require("../../assets/pic/nguyenlieu/socmadonem.jpg"),
  },
  {
    ingredientId: 44,
    name: "Bắp cải tím",
    photo_url: require("../../assets/pic/nguyenlieu/bapcaitim.jpg"),
  },
  {
    ingredientId: 45,
    name: "Bắp cải xanh",
    photo_url: require("../../assets/pic/nguyenlieu/bapcaixanh.jpg"),
  },
  {
    ingredientId: 46,
    name: "Thanh cua",
    photo_url: require("../../assets/pic/nguyenlieu/thanhcua.jpg"),
  },
  {
    ingredientId: 47,
    name: "Rong nho",
    photo_url: require("../../assets/pic/nguyenlieu/rongnho.jpg"),
  },
  {
    ingredientId: 48,
    name: "Cá ngừ",
    photo_url: require("../../assets/pic/nguyenlieu/hopcanngu.jpg"),
  },
  {
    ingredientId: 49,
    name: "Đậu hủ",
    photo_url: require("../../assets/pic/nguyenlieu/dauhu.jpg"),
  },
  {
    ingredientId: 50,
    name: "Bột rau câu",
    photo_url: require("../../assets/pic/nguyenlieu/botraucau.jpg"),
  },
  {
    ingredientId: 51,
    name: "Cafe",
    photo_url: require("../../assets/pic/nguyenlieu/cafe.jpg"),
  },
  {
    ingredientId: 52,
    name: "Milo",
    photo_url: require("../../assets/pic/nguyenlieu/milo.jpg"),
  },
  {
    ingredientId: 53,
    name: "Phô mai",
    photo_url: require("../../assets/pic/nguyenlieu/phomai.jpg"),
  },
  {
    ingredientId: 54,
    name: "Flan",
    photo_url: require("../../assets/pic/nguyenlieu/flan.jpg"),
  },
  {
    ingredientId: 55,
    name: "Chuối",
    photo_url: require("../../assets/pic/nguyenlieu/chuoi.jpg"),
  },
  {
    ingredientId: 56,
    name: "Đậu phộng",
    photo_url: require("../../assets/pic/nguyenlieu/dauphong.jpg"),
  },
  {
    ingredientId: 57,
    name: "Socola",
    photo_url: require("../../assets/pic/nguyenlieu/socola.jpg"),
  },
];
