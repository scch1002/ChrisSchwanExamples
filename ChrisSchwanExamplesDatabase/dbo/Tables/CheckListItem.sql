CREATE TABLE [dbo].[CheckListItem] (
    [Id]          BIGINT          IDENTITY (1, 1) NOT NULL,
    [CheckListId] BIGINT          NOT NULL,
    [ItemText]    NVARCHAR (1000) NOT NULL,
    [DateAdded]   DATETIME        NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_CheckList_CheckListItem] FOREIGN KEY ([CheckListId]) REFERENCES [dbo].[CheckList] ([Id])
);

