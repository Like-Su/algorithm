# 编译器设置
CC = gcc
CFLAGS = -Wall -Wextra -g -std=c11
LDFLAGS = 

# 目录设置
BUILD_DIR = build
BIN_DIR = bin

# 查找所有C源文件
SOURCES := $(shell find . -name "*.c" -not -path "./build/*" -not -path "./bin/*")

# 默认目标
.PHONY: all
all: 
	@mkdir -p $(BUILD_DIR)
	@mkdir -p $(BIN_DIR)
	@echo "开始编译..."
	@$(MAKE) --no-print-directory compile_all
	@echo "编译完成！"

# 编译所有文件
.PHONY: compile_all
compile_all:
	@for src in $(SOURCES); do \
		src_clean=$$(echo $$src | sed 's|^\./||'); \
		obj_file="$(BUILD_DIR)/$$src_clean"; \
		obj_file=$${obj_file%.c}.o; \
		obj_dir=$$(dirname "$$obj_file"); \
		base_name=$$(basename "$$src_clean" .c); \
		dir_name=$$(dirname "$$src_clean"); \
		if [ "$dir_name" = "." ]; then \
			exe_file="$(BIN_DIR)/${base_name}.out"; \
		else \
			dir_base=$(basename "$dir_name"); \
			exe_file="$(BIN_DIR)/${dir_base}_${base_name}.out"; \
		fi; \
		mkdir -p "$$obj_dir"; \
		echo "编译: $$src"; \
		$(CC) $(CFLAGS) -c "$$src" -o "$$obj_file"; \
		if [ $$? -eq 0 ]; then \
			echo "链接: $$exe_file"; \
			$(CC) $(LDFLAGS) "$$obj_file" -o "$$exe_file"; \
			if [ $$? -eq 0 ]; then \
				echo "✓ 成功: $$exe_file"; \
			else \
				echo "✗ 链接失败: $$src"; \
			fi; \
		else \
			echo "✗ 编译失败: $$src"; \
		fi; \
		echo ""; \
	done

# 清理编译文件
.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) $(BIN_DIR)
	@echo "清理完成"

# 只清理目标文件，保留可执行文件
.PHONY: clean-obj
clean-obj:
	rm -rf $(BUILD_DIR)
	@echo "清理目标文件完成"

# 重新编译
.PHONY: rebuild
rebuild: clean all

# 显示帮助信息
.PHONY: help
help:
	@echo "可用的make目标："
	@echo "  all        - 编译所有源文件（默认）"
	@echo "  clean      - 清理所有编译生成的文件"
	@echo "  clean-obj  - 只清理目标文件"
	@echo "  rebuild    - 清理后重新编译"
	@echo "  list       - 列出所有源文件"
	@echo "  help       - 显示此帮助信息"

# 列出所有源文件
.PHONY: list
list:
	@echo "=== 检测到的源文件 ==="
	@for src in $(SOURCES); do \
		echo "  $$src"; \
	done
	@echo ""
	@echo "总计: $$(echo $(SOURCES) | wc -w) 个文件"