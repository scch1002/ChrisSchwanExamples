CREATE TABLE [dbo].[CheckList] (
    [Id]            BIGINT         IDENTITY (1, 1) NOT NULL,
    [CheckListName] NVARCHAR (100) NOT NULL,
    [DateAdded]     DATETIME       NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

