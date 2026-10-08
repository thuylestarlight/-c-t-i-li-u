# THƯƠNG NGUYÊN KÝ — GHI CHÚ BÀN GIAO ĐỂ VIẾT TIẾP QUYỂN 9 (Ch.161–180)

> Dán (hoặc đính kèm) file này vào đoạn chat mới, kèm câu: *"Đọc GHI_CHU_VIET_TIEP_Q9.md trong repo, rồi viết tiếp từ chương 161."*
> Repo: `thuylestarlight/-c-t-i-li-u`, nhánh `claude/inspiring-fermat-lm9466`.

---

## 0. Trạng thái hiện tại

- Đã xong: **Quyển 5 → Quyển 8 (ch.81–160)** trong repo (`Q5/`…`Q8/`), docx ở `docx/`.
- Q1–Q4 (ch.1–80) **chỉ có trong `nguon/`** (bản Cụm .md), cùng outline, bảng POV/tên chương, hệ thống nhân vật, world bible, ghi chú Q1–Q4, ghi chú văn phong.
- Chương tiếp theo: **ch.161**, mở **Quyển 9 — TÂN ĐIỂN SƠ LẬP**. File: `Q9/ThuongNguyen_Chuong_161.md`, mở đầu bằng `# QUYỂN 9 — TÂN ĐIỂN SƠ LẬP` rồi `## Chương 161 — <Tên>`.

## 1. Quy trình làm việc (yêu cầu của tác giả)

- "Viết tiếp" = viết **nhiều chương mỗi lượt**, xuất thẳng file .md, gửi file, **giải thích tối thiểu**.
- **Tự sửa lỗi** ở bất kỳ chương cũ nào khi phát hiện, trong lúc viết.
- **Tự quyết** (tên chương, chi tiết mơ hồ) miễn **logic và kịch tính**; không hỏi lại.
- Cuối mỗi quyển: **rà soát cả quyển** → sửa → **xuất docx theo cụm 5 chương**.
- POV: **ưu tiên Minh Châu (MC) và Lục Trạch**. Mỗi quyển chỉ giữ **2 chương POV ngoài** theo bảng POV. Q9: **ch.167 ⟨Tĩnh Nguyên — nhà vua⟩**, **ch.176 ⟨Tiểu Cẩn⟩**. Các chương outline giao POV khác thì chuyển về MC/Lục Trạch (qua ghi chép, thư, nhân chứng, ngồi sau bình phong…).
- Độ dài: **≥3.500 chữ/chương** (từ ch.155 trở đi), chương cao trào 4.000–5.000. Ch.180 (kết quyển) 4.000–5.000.
- Đếm chữ (bỏ dòng tiêu đề `#`):
  `python3 -c "s=open('FILE',encoding='utf-8').read();print(len(' '.join(l for l in s.splitlines() if not l.startswith('#')).split()))"`
- Commit kèm 2 dòng cuối:
  ```
  Co-Authored-By: Claude <noreply@anthropic.com>
  ```
  rồi `git push -u origin claude/inspiring-fermat-lm9466`. Không tạo PR.
- Xuất docx (cần `npm i docx` hoặc docx có sẵn): `node tools/build_docx.js <quyển> "<Tên quyển>" "Cụm k · Chương a – b" docx/ThuongNguyen_Q9_Cumk_Cha-b.docx <các file md>`
  Vòng lặp mẫu cho Q9:
  ```
  q=9; S=161; T="Tân Điển Sơ Lập"; for k in 1 2 3 4; do a=$((S+(k-1)*5)); b=$((a+4)); fs=""; for n in $(seq $a $b); do fs="$fs Q9/ThuongNguyen_Chuong_$(printf %03d $n).md"; done; node tools/build_docx.js $q "$T" "Cụm $k · Chương $a – $b" docx/ThuongNguyen_Q${q}_Cum${k}_Ch${a}-${b}.docx $fs; done
  ```

## 2. Văn phong

- Câu ngắn. Đoạn một dòng. Ngắt cảnh bằng `* * *`.
- Chương mở bằng **ngày/giờ** ("Mười một tháng Bảy. Giờ Mão.") rồi địa điểm.
- Ghi chép sổ in nghiêng `*...*`, thường cuối chương ("Đêm ấy, ở …, nàng viết vào sổ.").
- Kết chương `*(Hết chương N)*`; kết quyển thêm `*— Hết Quyển N —*`.
- Motif lặp (dùng có chừng mực): "Mọi chữ đều đúng." · "Nàng không định đếm. Con số tự tới." · "Bản khảo phải có người chịu." · "Lính đọc cờ. Không đọc lệnh." · "Lửa chỉ nói một điều. Bây giờ." · "Năm thứ nhất… Năm thứ bốn mươi…" (rhyme quá khứ–hiện tại).
- Tránh lạm dụng "rất lâu", "Một lần.".

## 3. Xưng hô (bắt buộc)

- **Cấm** trong lời thoại: anh/chị/em/tôi/bạn/cô (trừ "cô nương", "cô mẫu"). Trong lời kể cũng tránh "em gái/anh trai/người anh" → dùng **muội muội / huynh trưởng / đệ / tỷ**.
- Lời kể của MC: MC = "nàng"; **Cảnh Thần = "hắn"**; nam cùng thế hệ = "y"; nam đời trước = "ông"; Thục Nghi = "bà"; nữ khác = "nàng ấy".
- MC: "bổn cung" khi công khai/với thuộc hạ/với Cảnh Thần; **"ta" với Lục Trạch** khi riêng; "con" với Thục Nghi khi riêng; **"nhi thần" với vua**; "muội" với Cảnh Uyên; "hậu sinh" với ông lão mười một năm.
- Lục Trạch với MC: từ ch.156 xưng **"ta" / gọi "nàng"** (cố ý, đã thân sau khi bị giáng); trước đó "thuộc hạ/điện hạ".
- Tố Y (Thái tử phi): "thần thiếp". Tuyết Ly: "thần" (với MC, Thái tử), "con" (với cha, khi riêng), "muội"/"huynh trưởng" với Mặc Hàn. Trọng Sơn: "bổn châu". Châu Mục với nhau: "Sóc Châu/Lam Châu…" ngôi thứ ba.
- Cảnh Thần ↔ MC: "đệ" / "đại tỷ". Ẩn Chi ↔ Cảnh Thần: "muội"/"đệ" (Ẩn Chi lớn hơn). Ẩn Chi gọi MC "biểu tỷ", Thục Nghi "cô mẫu". Diệp Lâm gọi MC "biểu muội".
- Âu Dương Chỉ: "lão hủ". Khởi cư lang: "lão thần". Quản sự/người dưới: "tiểu nhân". Vua: "trẫm", gọi MC "con". Hoàng hậu: "bổn cung".
- Tiểu Cẩn: "tiểu nhân" (ch.176 tên chương: *Ta Không Phải Nô, Cũng Không Phải Nông* — trong thoại dùng "ta"/"tiểu nhân", **không** "tôi").

## 4. Thời gian & tuổi

- Năm 1 = Đoan Hòa 38 ("năm kia"), năm 2 = Đoan Hòa 39 ("năm trước"), **hiện tại = Đoan Hòa 40**. Kết Q8: **15 tháng Bảy, Đoan Hòa 40**.
- Lập quốc "gần hai trăm năm". Vua giữ bí mật **bốn mươi năm** (biết từ năm 14 tuổi, đêm tiên vương mất). Vua thứ sáu của Vệ La; năm đời giữ im lặng trước ông.
- Tuổi: MC 26 · Cảnh Uyên 30 · Cảnh Thần 23 · Tố Y 25 · Tuyết Ly 28 · Mặc Hàn 32 · Thừa Phong 33 · Lục Trạch 29 · Ẩn Chi 24 · Diệp Lâm 29 · vua 54 · Thục Nghi 50 (vào cung 33 năm) · Trọng Sơn 57 · Hoài An 52 · Cẩn Ngôn 56 · Hàn Sách 51 · Âu Dương Chỉ 63 · Đạm Thai Bá 37 · Tiểu Cẩn 21 · Cương 17 · Tế Tửu 71 · Khởi cư lang ~69 (ghi khởi cư 40 năm) · Hạ Thanh ~26.
- **Lời thề Lan Đài lệnh sử** (ch.129): *"Thề giữ chức ba năm, không gả."* — nhận chức khoảng tháng Hai năm trước (Đoan Hòa 39) → hết hạn khoảng **tháng Hai Đoan Hòa 42**. ⚠ Ch.180 outline là hôn lễ MC × Lục Trạch → **phải xử lý**: hoặc ch.180 là *được chuẩn hôn / định hôn* (vua chuẩn y bằng hơi tàn), cưới sau khi mãn hạn; hoặc MC từ chức lệnh sử có lý do. Gợi ý: chọn **chuẩn hôn + định ngày sau mãn hạn**, giữ "chuộc lỗi của vua".

## 5. Thế giới & nhà (tóm tắt)

- **Ngũ Châu** (5 nhà, 5 cờ): Sóc (Đạm Thai, cờ huyền ngựa trắng, ấn ngọc huyền, ấn khô **ngựa**) · Lam (Bách Lý, cờ lam, **sóng**) · Thiết (Mộ Dung, cờ xám sắt, **búa cuốc**) · Cẩm (Tư Mã, cờ đỏ gấm, **bông lúa**) · Trung Châu (Vệ La, cờ vàng sẫm, rồng; Trung Châu Mục = Thái tử Cảnh Uyên).
- **Hai châu bị xóa**: **Thư Châu** (nhà Âu Dương, tây bắc, thành hồ, sách) và **Liêm Châu** (nhà Tư Đồ, đông nam, sông Liêm, **Đại Lý** — cơ quan xét xử; chữ móc câu). Năm thứ nhất: Thư trình đơn lên Đại Lý hỏi một điều về "người được lập làm vương"; Liêm nhận đơn → chiếu "hai nhà trái ước, xử theo danh sách, bất thẩm"; Sóc thi hành (tướng đạo đông nam **Đạm Thai Khắc**); đêm 11/3 cổng nước thành hồ mở từ bên trong (thư lại họ Âu Dương, tổ 6 đời của Âu Dương Chỉ); 12/3 hai thành mất; 20 giàn lửa hiệu 400 dặm. 27 trẻ chấm son "Giữ": Đạm Thai 7, Bách Lý 6, Mộ Dung 7, Tư Mã 7, Vệ La không nhận.
- **Hầm số bảy** (Thiết Châu) nằm trên **đất Liêm**.
- Đại sảnh Chính Dương lâu: 5 hàng ghế, 5 cờ, **giá thứ sáu** (biển đồng đã gỡ, còn **bốn lỗ đinh**), ngai trên bậc cao, bình phong chín núi ba sông góc tây bắc.
- **Tàng Thư Các** (Quốc Tử Giám) có **hạ tầng** giữ chiếu gốc năm thứ nhất; thủ thư Âu Dương Chỉ giữ chìa ("thủ thư chưởng thược, bất thuộc Lan Đài, bất thuộc Lễ Bộ"); **Hạ Thanh là người giữ sổ hạ tầng**. Bản khảo 47 tờ của MC: Lễ Bộ niêm, để ở **Lan Đài tầng ba**.
- Ấn rồng hiện tại **năm móng**; ấn trên chiếu năm thứ nhất **bốn móng**.

## 6. Những gì đã xảy ra ở Quyển 8 (ch.141–160) — để nối mạch

- 141: Chiếu (19/4): lệnh sử không vào đại sảnh; MC ngồi sau bình phong với Khởi cư lang. Ba Châu Mục cho 7 ngày.
- 143 (27/4): vua ngự: "Trẫm không trả lời… Trẫm không mở… 47 tờ trẫm sẽ niêm… Thế thì trẫm không biết." Sóc 12.000 kỵ "diễn tập" tới sông Nhạn; Tuyết Ly truyền lệnh chậm 1 ngày.
- 144: Bách Lý đóng băng tín dụng; Tố Y bảo chứng lương cấm quân 42.000 lượng.
- 145: 23 điền trang phía nam kinh (Tư Mã) "úng"; kho nghĩa thương phủ Nhị hoàng tử (cờ vàng nhạt).
- 146: Thiết ngừng mỏ; Tích Vân lên tiếng, Duệ Nham giải vây, kho đá núi tây 2.000 thạch; cả hẻm Hắc Thạch tắt lò (cha Lục Trạch đã mất 2/4 năm trước).
- 147 (1/6): Lục Trạch giữ cổng Nam mở thêm 2 canh giờ, **3.421 người** vào thành; "Người ta không chết vì giáo. Người ta chết vì đứng."
- 148 (4/6): Cảnh Uyên một mình ra ngã ba Bia ("Thái tử không mang theo ai").
- 149: 300 người tị nạn dưới gốc hòe QTG; Tiểu Cẩn viết thư miễn phí; giá gạo 20→85→90; bài hát người mù chợ Đông ("Bảy nhà về núi, năm nhà về kinh…").
- 150: Thư Tuyết Ly (qua Cương → Đạm Thai Bá): đọc 2 tờ cho 3.000 quân ở đồn bắc 30/4; viện quân pháp điều 17; Trọng Sơn bỏ qua nàng ra lệnh thẳng 30 đội: 24 tiến vây cổng Bắc (từ 15/6, chặn đường gạo bến Thạch Than), 6 đội đứng (có đội tuần đèo).
- 151 (22/6): 17 đại thần đề nghị truyền ngôi; Cảnh Uyên từ chối. Cảnh Thần đề xuất Ngũ Châu xét vương.
- 152–153: Cảnh Thần thừa nhận chọn dòng; nghi chú **điều chín** (4/5 thì phế) do hắn soạn; Thục Nghi đổi 23 điền trang lấy tiếng Cẩm "ở lại"; tá điền kiện ở phủ Tư Mã.
- 154 (1/7): **Lục Trạch bị giáng lính trơn** (giữ tước kỵ úy), giữ cổng Nam dưới quyền một lính già. MC dời về Phượng Nghi điện. Thục Nghi sẽ ngồi "hàng của người bị xét". 3/7 Mặc Hàn nói ở cửa: "Giàn gần nhất là của tiền quân. Tiền quân là đồn bắc."
- 155 ⟨Ẩn Chi⟩: thấy 4 trang Tư Mã trong ngăn kéo cha; hỏi Cảnh Thần 4 câu, câu 4 "Đệ muốn ngồi lên ngai?" — "Không" (nói dối). **Nàng giữ 4 trang bọc lụa, nút sống: "Muội không hủy. Muội đợi."**
- 156 (8/7): Cảnh Uyên áo vải xám đứng giữa 8.000 cấm quân và 9.000 kỵ Sóc; Hắc Tùng lĩnh cháy, **giàn tiền quân không cháy**. Lục Trạch đứng thứ 11 trong 50 người không khiên.
- 157 ⟨Tuyết Ly⟩: nàng nhận canh giàn (quân pháp điều 41, 42; điều 90: bất tuân trước trận = chém), không châm, giơ đá lửa ba nhịp rồi ném, cưỡi ra đứng trước Thái tử quay lưng về phía quân nhà mình. Đội trưởng **Khâu Bá Lực** (48 tuổi) nhường lối, tháo mũ. Trọng Sơn hạ cờ (hiệu riêng: *nghe – đã nghe – rút, không truy*). Cảnh Uyên: "Ta không cảm ơn… Ta nhớ." Gọi Tuyết Ly về trướng "mang kiếm".
- 158 (10/7): Trọng Sơn hoãn xét con gái: **"Xét theo quân pháp. Sau Ngũ Châu."** Hội xét: Thục Nghi nhận "lấy một tiếng". Sóc gọi lệnh sử làm chứng (nghi chú **điều 11**). **MC khai toàn bộ**: bảy châu, Liêm không có tội, người ra lệnh Vệ La, bốn ấn khô (ngựa, sóng, búa cuốc, bông lúa), chiếu gốc soi nến thấy bốn cung lún; **không nhà nào đặt ấn**. Âu Dương Chỉ tự nhận: thư lại mở cổng là người nhà Âu Dương (nhà Thư Châu Mục). MC nhận phần mình ("Bổn cung không trình… Người viết chịu trước"). Cẩn Ngôn: "Bông lúa." Thục Nghi: nhũ mẫu không họ.
- 159: Lục Trạch gác Chính Dương lâu (người thứ tư bên trái), thẻ bài đứt dây. Châu Mục cãi nhau (nợ, đinh, gạo, đường biển); **Thục Nghi: "Nếu Thương Nguyên vỡ, các ngài cai trị ai?"** Sóc ngồi (rút về sông Nhạn), Thiết ngồi (đóng hầm số bảy), Lam ngồi (khế ước ký với Ngũ Châu), Cẩm "chưa đứng lên". Vua gửi: *"Trẫm xin được nói trước Ngũ Châu."*
- 160 (11/7): Vua chống gậy trúc tự tới, **ngồi ghế người bị xét**: thừa nhận "Người ra lệnh là Vệ La"; **không mở hết, niêm**; **không nói đơn Thư Châu hỏi gì**; nhận giám: **5 người của 5 châu ngồi Văn Hoa điện, đọc mọi chiếu, chiếu nào không đọc thì không ban; năm ấn có son**. Bỏ phiếu: **Trung Châu không bỏ** (Cảnh Uyên: "Con không xét cha… nhưng không ngồi ngai của người cha con không xét"), Sóc ở lại, Lam ở lại, **Thiết phế**, Cẩm ở lại ("đã bán tiếng này") → vương ở lại. Hồ sơ (chiếu gốc + 47 tờ) **quấn một lụa, 4 ấn son + một chỗ trống cho Thiết**; "lụa không mở được khi chưa đủ năm". Vua nói riêng với Cảnh Thần: *"Con chọn dòng giỏi. Lần sau, viết cả trang."* Đêm 11/7: **Âu Dương Chỉ bị 4 cấm quân không giáp đưa đi "dưỡng bệnh ở biệt viện phía tây, không tiếp người"** (giam lặng lẽ), mang theo một cuốn sổ nhỏ trong tay áo. 12/7 cổng Bắc mở, người ngoại quách về. **15/7: bốn châu (cả Thiết) đóng 4 ấn đòi viết quyền xét/phế vương thành luật, năm châu cùng soạn, trước Tết Đoan Hòa 41**; Lễ Bộ giao **Cảnh Thần giữ bút**. Sổ MC kết: *"Lệnh sử vào đại sảnh. Bệ hạ tự tới. Thương Nguyên không vỡ. / Chưa."*

## 7. Trạng thái nhân vật cuối Q8

- **Minh Châu**: Lan Đài lệnh sử (tòng lục phẩm, thề 3 năm không gả); ở Phượng Nghi điện; bản khảo bị niêm; giữ sổ việc từng ngày; định theo dõi sổ cổng biệt viện phía tây. Biết bí mật **Tiểu Cẩn = hậu duệ Tư Đồ Bình (dòng "Mạc")** — giữ kín, không lộ.
- **Lục Trạch**: lính trơn cấm quân (giữ tước kỵ úy), gác cổng Nam/cổng Bắc/Chính Dương lâu. **Đếm lần nói chuyện với MC: lần cuối = 24 ("bên này, lần thứ năm", 12/7)** → lần sau là 25. Người Hắc Thạch (Thiết Châu), con thợ rèn, cha đã mất.
- **Cảnh Uyên**: Thái tử, Trung Châu Mục; vợ Tố Y. Gần như nhiếp chính.
- **Cảnh Thần**: Lễ Bộ hành tẩu, giữ bút soạn luật phế vương; vị hôn phu Ẩn Chi; tham vọng ngai (nói dối Ẩn Chi). Bí mật kiếm của hắn đã mất giá trị vì MC khai hết.
- **Vua**: yếu, ho ra máu, đi gậy trúc; đã nói một phần; giam Âu Dương.
- **Thục Nghi**: đã thừa nhận mua tiếng; xưng "Tư Mã, bông lúa"; quan hệ với Cẩn Ngôn (huynh trưởng) rạn mà gần.
- **Tuyết Ly**: chờ xét quân pháp điều 90 "sau Ngũ Châu" (→ ch.182 được tha nhờ điều khoản mới của Mặc Hàn ở ch.181). **Cương** ở hàng thứ hai đội tuần đèo; bà tổ là một trong 7 trẻ Đạm Thai nhận ("con bé phía nam").
- **Âu Dương Chỉ**: bị giam ở biệt viện phía tây; giấu **một câu về lỗi của vương** (đơn Thư Châu hỏi gì) — **payoff ch.279, không tiết lộ sớm**.
- **Ẩn Chi**: giữ 4 trang Tư Mã bọc lụa "đợi"; sắp cưới Cảnh Thần (ch.179).
- **Hạ Thanh**: ký lục sinh Kinh Triệu phủ + người giữ sổ hạ tầng Tàng Thư Các.
- **Tiểu Cẩn**: viết thư miễn phí ở sân hòe QTG cho 300 người tị nạn.
- **Hàn Sách/Duệ Nham/Tích Vân** (Thiết): hầm số bảy đóng; Thiết giữ "chỗ trống" trên lụa niêm.
- **Hoài An** (Lam, cha Tố Y): khế ước với "Ngũ Châu, không với Vệ La".
- Phụ: A Nhu (thị nữ MC), Khởi cư lang, Lễ Bộ Thượng thư, Đạm Thai Bá (phó chỉ huy cấm quân, đường huynh Tuyết Ly), Khâu Bá Lực, đội trưởng tuần đèo, người đàn bà khăn nâu, người mù hát chợ Đông, Diêu Bá, Tư nghiệp, Tế Tửu.

## 8. Kế hoạch Quyển 9 (đã điều chỉnh theo mạch truyện thực tế)

Tên chương lấy từ bảng POV (`nguon/Thuong_Nguyen_Cau_Truc_POV_300_Ten_Chuong.md`); nội dung từ outline (`nguon/Thuong_Nguyen_Outline_CHOT_300_Chuong.md`, mục QUYỂN 9). Các điều chỉnh:

| Ch | Tên | POV dùng | Ghi chú điều chỉnh |
|---|---|---|---|
| 161 | Hai Trăm Người Chết Không Có Trận Đánh | Lục Trạch | Người chết vì đói, bệnh, giẫm đạp trong 25 ngày bị vây cổng Bắc (15/6–10/7) và ở ngoại quách/dưới gốc hòe; mở nhịp chậm sau cao trào. Y đếm ở khu ngoài tường. Triều không biết con số. Chưa có chương nào trước nói rõ số người chết → con số 200 là mới, hợp lệ. |
| 162 | Cổng Mở, Chỗ Cũ Không Còn | MC (Tiểu Cẩn hiện diện) | Người về ngoại quách thấy chỗ cũ bị chiếm/hỏng; Tiểu Cẩn tổ chức phát lương ("người của công chúa"). |
| 163 | Hai Danh Sách Đặt Cạnh Nhau | MC qua Hạ Thanh | Danh sách người chết vs danh sách ~300 dòng tên năm thứ nhất; triều muốn con số nhỏ. |
| 164 | Đám Tang Không Có Giấy Tờ | Lục Trạch | Y bỏ tiền lo tang; MC tìm y (thay "về kinh"). |
| 165 | Ngai Vàng Còn Đó, Người Thì Không | MC | Cảnh Uyên nhiếp chính thực tế; Cảnh Thần được giao Lễ Bộ (thăng chức). Năm người giám ở Văn Hoa điện bắt đầu làm việc. |
| 166 | Đứng Suốt Buổi Và Ngã Khi Vào Trong | MC | Vua đứng trước dân; ngã khi vào trong; dân im lặng. |
| 167 | Lời Xin Lỗi Nửa Vời | **⟨Tĩnh Nguyên⟩** | Vua xin lỗi vì che giấu, không xin lỗi việc tổ tiên; Âu Dương Chỉ nghe tin "từ trong ngục" → ở đây là **biệt viện phía tây**. |
| 168 | Phải Có Chữ Trên Giấy | MC | Ngũ Châu tái họp; Cảnh Uyên lần đầu không nhượng, đề nghị táo bạo hơn. |
| 169 | Bảy Điều Của Minh Ước Mới | MC | Minh ước 7 điều; **điều 7** chưa ai đọc kỹ (gài). |
| 170 | Người Bình Dân Cầm Bút Viết Quốc Điển | MC (Hạ Thanh) | Hạ Thanh soạn phần quyền hạn quốc vương dựa trên **luật Liêm cổ** (Đại Lý tạp lục…); Cảnh Thần giữ bút tổng, Hạ Thanh chấp bút phần này. |
| 171 | Con Gái Đàm Phán Thay Cha | MC | Tuyết Ly đại diện Sóc; Trọng Sơn ủy quyền ngầm. |
| 172 | Luật Phế Vương | MC | 5 lá phiếu, 4/5 là đủ; Cảnh Uyên ký. **Setup lớn nhất — payoff ch.287–292.** Nhắc tiền lệ: Trung Châu không bỏ phiếu ngày 11/7. |
| 173 | Huyết Thống Vẫn Ưu Tiên, Nhưng Không Đủ | MC | Thục Nghi chặn Cảnh Thần (kế vị theo "năng lực"); hắn hiểu cần Ngũ Châu, không cần huyết thống. |
| 174 | Dựng Lại Đại Lý Tự | MC | Hạ Thanh được bổ nhiệm (26 tuổi). Cơ quan chính là thứ Liêm từng là. |
| 175 | Luật Mới Trùng Luật Đã Chết | MC | MC phát hiện luật mới trùng luật Liêm; im lặng (hồ sơ đã niêm); bắt đầu **bản thảo thứ hai, giấu kỹ hơn**. |
| 176 | Ta Không Phải Nô, Cũng Không Phải Nông | **⟨Tiểu Cẩn⟩** | Xin quyền cư trú; luật mới không có chỗ cho người phóng lương; bị hoãn (setup Q13). Không lộ bí mật dòng Tư Đồ. |
| 177 | Thắng Kiện Và Mất Uy Tín | MC (nghe xử) | Diệp Lâm kiện tá điền (người ở ch.73; liên quan 23 điền trang/tá điền kiện phủ Tư Mã); thắng, mất uy tín; dân không thi hành. |
| 178 | Vụ Án Cũ Xử Lại | MC (Ẩn Chi hiện diện) | Vụ phá hôn ch.15 xử lại theo luật mới; Ẩn Chi hỏi Cảnh Thần một câu, bị né. |
| 179 | Hôn Lễ Của Nhị Hoàng Tử | MC | Cảnh Thần × Ẩn Chi; Cảnh Uyên phản đối công khai; Ẩn Chi thề nhất phu nhất thê. |
| 180 | **Tân Thương Nguyên** | MC | MC × Lục Trạch: **vua chuẩn hôn bằng hơi tàn** (xử lý lời thề lệnh sử 3 năm — xem mục 4). Kết `*— Hết Quyển 9 —*`. |

Các mạch phải giữ xuyên Q9: Tuyết Ly chờ xét (→182); Âu Dương ở biệt viện (MC theo dõi qua sổ cổng); Ẩn Chi giữ 4 trang; chỗ trống của Thiết trên lụa niêm; 5 người giám ở Văn Hoa điện; Lục Trạch đếm lần gặp (tiếp từ 25); hạn luật trước Tết Đoan Hòa 41; sức khỏe vua đi xuống; bài hát người mù.

## 9. Kiểm tra trước khi gửi mỗi chương

1. Đủ chữ. 2. Không lộ điều MC không thể biết (cảnh MC không có mặt chỉ biết qua lời kể/thư/sổ). 3. Xưng hô đúng mục 3. 4. Ngày tháng nối đúng (Q9 bắt đầu sau 15/7 Đoan Hòa 40). 5. Số liệu khớp (12.000 kỵ Sóc = 24 đội + 6 đội; 3.421 người; 300 người dưới hòe; 27 trẻ 7/6/7/7). 6. Commit + push + gửi file.
